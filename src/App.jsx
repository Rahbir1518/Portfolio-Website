import { useEffect, useState } from "react";
import Waves from "./components/Waves.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import pic from "./assets/pic2.jpg";
import TechStack from "./components/TechStack.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="loader-container">
        <div className="square"></div>
        <div className="infinite-scroll"></div>
      </section>
    );
  }

  return (
    <div className="relative min-h-screen bg-black cursor-none overflow-auto">
      <div className="fixed inset-0 z-0">
        <Waves backgroundColor="white" lineColor="secondary" />
      </div>

      <div className="relative z-10 parent grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 text-white p-4">
        
        <Navbar />
        
        <Hero />

        <div className="div3 flex justify-center items-center">
          <img src={pic} alt="Logo" className="rounded-2xl md:max-w-70 md:rounded-full lg:w-full lg:max-w-90 aspect-square object-cover lg:rounded-full"/>
        </div>

        <TechStack />

        <FeaturedProjects />
        
      </div>
    </div>
  );
}

export default App;
