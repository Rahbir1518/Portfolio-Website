import Waves from "./components/Waves.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import logo from "./assets/logo.jpg";
import TechStack from "./components/TechStack.jsx";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-black cursor-none overflow-auto">
        <div className="fixed inset-0 z-0">
          <Waves backgroundColor="white" lineColor="secondary" />
        </div>

        <div className="relative z-10 parent grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 text-white p-4">

          <Navbar />
          
          <Hero />
          
          <div className="div3 flex justify-center items-center">
            <img src={logo} alt="Logo" className="rounded-2xl md:max-w-70 md:rounded-full lg:w-full lg:max-w-90 aspect-square object-cover lg:rounded-full" />
          </div>
          
          <TechStack />

          <div className="div5 bg-primary col-span-4 md:col-span-2 sm:col-span-1">5</div>
          <div className="div6 bg-primary col-span-4 md:col-span-2 sm:col-span-1">6</div>
        </div>
      </div>
    </>
  );
}

export default App;
