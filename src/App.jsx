import Waves from "./components/Waves.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden cursor-none">
        {/* Waves background */}
        <div className="absolute inset-0 z-0">
          <Waves backgroundColor="#E1D9D1" lineColor="#6F4E37" />
        </div>

        {/* Grid content */}
        <div className="relative z-10 parent grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 text-white p-4 h-screen ">
          <Navbar />
          <div className="div2 col-span-3 md:col-span-2 sm:col-span-1 bg-[#EDE8D0]/50 hover:bg-[#EDE8D0]"><h1 className="text-black text-4xl p-2">Hello</h1></div>
          {/* <div className="div3 bg-[#EDE8D0] col-span-1 md:col-span-2 sm:col-span-1">3</div>
          <div className="div4 bg-[#EDE8D0] col-span-4 md:col-span-2 sm:col-span-1">4</div>
          <div className="div5 bg-[#EDE8D0] col-span-4 md:col-span-2 sm:col-span-1">5</div>
          <div className="div6 bg-[#EDE8D0] col-span-4 md:col-span-2 sm:col-span-1">6</div> */}
        </div>
      </div>
    </>
  );
}

export default App;