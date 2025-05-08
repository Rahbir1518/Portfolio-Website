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
        <div className="square" />
        <div className="infinite-scroll" />
      </section>
    );
  }

  return (
    <div className="relative min-h-screen bg-black cursor-none overflow-auto">

      {/* Waves Background */}
      <div className="fixed inset-0 z-0">
        <Waves backgroundColor="white" lineColor="secondary" />
      </div>

      {/* Top: Navbar */}
      <div className="relative z-10 w-full px-4 py-6">
        <Navbar />
      </div>

      {/* Hero + Image */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Image on mobile (order-1), right on desktop (order-2) */}
        <div className="order-1 md:order-2 flex justify-center items-center pl-0">
          <img
            src={pic}
            alt="Rahbir"
            className="rounded-full object-cover aspect-square w-64 sm:w-72 md:w-100"
          />
        </div>

        {/* Hero on mobile (order-2), left on desktop (order-1) */}
        <div className="order-2 md:order-1 flex justify-center md:justify-start items-center p-4 md:pl-12">
          <div className="w-full md:w-11/12 lg:w-10/12">
            <Hero />
          </div>
        </div>
      </div>

      {/* Bottom: TechStack + FeaturedProjects */}
      <div className="relative z-10 parent grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 text-white p-4">
        <TechStack />
        <FeaturedProjects />
      </div>
    </div>
  );
}

export default App;
