import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Scene() {
  const containerRef = useRef(null);
  const initialized = useRef(false);
  const cleanupRef = useRef(null);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const colors = [
      new THREE.Color(0x8b6f47),
      new THREE.Color(0xd4a574),
      new THREE.Color(0xf5f1e8),
      new THREE.Color(0xa88b6a)
    ];

    const width = 100;
    const depth = 100;
    const count = width * depth;
    const positions = new Float32Array(count * 3);
    const colorsArray = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const spherePositions = new Float32Array(count * 3);

    for (let i = 0, idx = 0; i < width; i++) {
      for (let j = 0; j < depth; j++) {
        const x = (i - width / 2) * 0.5;
        const z = (j - depth / 2) * 0.5;
        
        positions[idx] = x;
        positions[idx + 1] = 0;
        positions[idx + 2] = z;
        
        originalPositions[idx] = x;
        originalPositions[idx + 1] = 0;
        originalPositions[idx + 2] = z;
        
        const c = colors[Math.floor(Math.random() * colors.length)];
        colorsArray[idx] = c.r;
        colorsArray[idx + 1] = c.g;
        colorsArray[idx + 2] = c.b;
        
        idx += 3;
      }
    }

    const phi = Math.PI * (3 - Math.sqrt(5));
    const radius = 6;
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      
      spherePositions[i * 3] = Math.cos(theta) * r * radius;
      spherePositions[i * 3 + 1] = y * radius;
      spherePositions[i * 3 + 2] = Math.sin(theta) * r * radius;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    // Function to get scale based on screen size
    const getPointScale = () => {
      if (window.innerWidth < 480) return 0.4;      // Small mobile: much smaller
      if (window.innerWidth < 768) return 0.6;      // Mobile: smaller
      if (window.innerWidth < 1024) return 0.8;     // Tablet: slightly smaller
      return 1.0;                                    // Desktop: full size
    };

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scrollProgress: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
        pointScale: { value: getPointScale() }  // Dynamic scale uniform
      },
      vertexShader: `
        uniform float time;
        uniform float scrollProgress;
        uniform float pointScale;  // New uniform for size control
        attribute vec3 color;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          // Multiply base size by pointScale - smaller on mobile
          gl_PointSize = (4.0 * pointScale * (1.0 + sin(time) * 0.2)) * (10.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          gl_FragColor = vec4(vColor, 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x8b6f47, transparent: true, opacity: 0.1 
    });
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 6), 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    camera.position.set(0, 0, 15);

    const state = {
      mouseX: 0, mouseY: 0,
      targetMouseX: 0, targetMouseY: 0,
      scrollProgress: 0, targetScroll: 0,
      frameId: null,
      clock: new THREE.Clock()
    };

    const handleMouseMove = (e) => {
      state.targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      state.targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      state.targetScroll = Math.max(0, Math.min(1, window.scrollY / 800));
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Update point scale on resize
      material.uniforms.pointScale.value = getPointScale();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      state.frameId = requestAnimationFrame(animate);
      
      const time = state.clock.getElapsedTime();
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;
      const lineAttr = lineGeometry.attributes.position;
      const lineArray = lineAttr.array;
      
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.15;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.15;
      state.scrollProgress += (state.targetScroll - state.scrollProgress) * 0.1;
      
      material.uniforms.time.value = time;
      material.uniforms.scrollProgress.value = state.scrollProgress;
      
      const rot = time * 0.3;
      const cosR = Math.cos(rot), sinR = Math.sin(rot);
      const mx = state.mouseX * 6, my = state.mouseY * 6;
      const scroll = state.scrollProgress;
      
      let index = 0;
      
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < depth; j++) {
          const ox = originalPositions[index];
          const oz = originalPositions[index + 2];
          
          const dist = Math.sqrt((ox - mx) ** 2 + (oz - my) ** 2);
          const wave = Math.sin((ox - mx) * 0.5 + time * 0.8) * 0.5 + 
                      Math.cos((oz - my) * 0.3 + time * 0.6) * 0.5 +
                      Math.max(0, 3 - dist * 0.3) * 1.2;
          
          let tx = spherePositions[index];
          let ty = spherePositions[index + 1];
          let tz = spherePositions[index + 2];
          
          if (scroll > 0) {
            const rx = tx * cosR - tz * sinR;
            const rz = tx * sinR + tz * cosR;
            const b = 1 + Math.sin(time * 1.5) * 0.03 * scroll;
            tx = rx * b; ty *= b; tz = rz * b;
          }
          
          const ease = scroll * scroll * (3 - 2 * scroll);
          posArray[index] = ox + (tx - ox) * ease;
          posArray[index + 1] = wave + (ty - wave) * ease;
          posArray[index + 2] = oz + (tz - oz) * ease;
          
          index += 3;
        }
      }
      
      posAttr.needsUpdate = true;
      
      if (scroll <= 0.8) {
        lines.visible = true;
        let li = 0, stride = 4;
        for (let i = 0; i < width; i += stride) {
          for (let j = 0; j < depth; j += stride) {
            const idx = (i * depth + j) * 3;
            if (i < width - stride && li < lineArray.length - 6) {
              const next = ((i + stride) * depth + j) * 3;
              lineArray[li++] = posArray[idx]; lineArray[li++] = posArray[idx+1]; lineArray[li++] = posArray[idx+2];
              lineArray[li++] = posArray[next]; lineArray[li++] = posArray[next+1]; lineArray[li++] = posArray[next+2];
            }
            if (j < depth - stride && li < lineArray.length - 6) {
              const below = (i * depth + (j + stride)) * 3;
              lineArray[li++] = posArray[idx]; lineArray[li++] = posArray[idx+1]; lineArray[li++] = posArray[idx+2];
              lineArray[li++] = posArray[below]; lineArray[li++] = posArray[below+1]; lineArray[li++] = posArray[below+2];
            }
          }
        }
        lineAttr.needsUpdate = true;
        lineMaterial.opacity = 0.1 * (1 - scroll);
      } else {
        lines.visible = false;
      }
      
      const tz = 15 - scroll * 6;
      camera.position.z += (tz - camera.position.z) * 0.1;
      camera.position.y = scroll * 2;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    animate();

    cleanupRef.current = () => {
      if (state.frameId) cancelAnimationFrame(state.frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      lineGeometry.dispose();
      material.dispose();
      initialized.current = false;
    };

    return () => {
      if (cleanupRef.current) cleanupRef.current();
    };
  }, []);

  return <div ref={containerRef} id="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
}