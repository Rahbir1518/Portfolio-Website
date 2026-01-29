import  {Nav}  from './components/Nav';
import {Hero}  from './components/Hero';
import  {Marquee}  from './components/Marquee';
import {Experience}  from './components/Experience';
import Projects  from './components/Projects';
import  {Skills}  from './components/Skills';
import  {Art}  from './components/Art';
import  {Footer}  from './components/Footer';
import {Scene}  from './three/Scene';
import  {Cursor}  from './utils/Cursor';
import './style.css';

function App() {
  return (
    <>
      <div className="noise" />
      <Scene />
      <Cursor />
      
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Projects />
        <Skills />
        <Art />
      </main>
      <Footer />
    </>
  );
}

export default App;