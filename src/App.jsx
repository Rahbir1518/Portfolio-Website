import Waves from "./components/Waves.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import logo from "./assets/logo.jpg";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden cursor-none">
        {/* Waves background */}
        <div className="absolute inset-0 z-0">
          <Waves backgroundColor="#FFFFFF" lineColor= "secondary" />
        </div>

        {/* Grid content */}
        <div className="relative z-10 parent grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 text-white p-4 h-screen">
          
          <Navbar />

          <Hero/>

          <div className="div3 flex justify-center items-center">
            <img src={logo} className="w-1/2 max-w-40 md:w-3/4 md:max-w-60 lg:w-full lg:max-w-80 aspect-square object-cover rounded-full" />
          </div>

          <div className="div4 bg-[#EDE8D0] col-span-4 md:col-span-2 sm:col-span-1">4</div>
          <div className="div5 bg-[#EDE8D0] col-span-4 md:col-span-2 sm:col-span-1">5</div>
          <div className="div6 bg-[#EDE8D0] col-span-4 md:col-span-2 sm:col-span-1">6</div>
        </div>
      </div>
    </>
  );
}

export default App;