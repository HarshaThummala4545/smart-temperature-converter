function Thermometer({ value }) {
  const height = Math.min(Math.max(value, 0), 100);

  return (
    <div className="flex justify-center mt-8">
      <div className="w-16 h-64 bg-slate-800 rounded-full relative overflow-hidden border-4 border-slate-600">
        <div
          className="absolute bottom-0 w-full bg-cyan-400 transition-all duration-700"
          style={{ height: `${height}%` }}
        />
      </div>
    </div>
  );
}

export default Thermometer;