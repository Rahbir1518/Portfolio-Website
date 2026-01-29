import { useEffect, useRef, useState } from 'react';

export function Cursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      const touch = window.matchMedia('(pointer: coarse)').matches;
      setIsTouch(touch);
      if (touch) {
        document.body.style.cursor = 'auto';
      } else {
        document.body.style.cursor = 'none';
      }
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouch) return;

    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
      
      if (outlineRef.current) {
        outlineRef.current.style.left = e.clientX + 'px';
        outlineRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (outlineRef.current) outlineRef.current.classList.add('hover');
    };

    const handleMouseLeave = () => {
      if (outlineRef.current) outlineRef.current.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add hover listeners to all interactive elements
    const addListeners = () => {
      document.querySelectorAll('.cursor-hover, a, button, .mobile-menu-btn').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addListeners();
    
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkTouch);
      observer.disconnect();
      document.querySelectorAll('.cursor-hover, a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
      
    </>
  );
}