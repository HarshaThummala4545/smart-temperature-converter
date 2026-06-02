import Hero from "./components/Hero";
import Converter from "./components/Converter";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <Hero />
        <Converter />
      </div>
    </div>
  );
}

export default App;