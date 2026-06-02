function TemperatureStatus({ value }) {
  let icon = "😊";
  let title = "Comfortable";
  let message = "Great weather for daily activities.";
  let bgColor = "from-green-500/20 to-cyan-500/20";

  if (value < 0) {
    icon = "❄️";
    title = "Freezing";
    message = "Wear warm clothes and stay indoors if possible.";
    bgColor = "from-blue-500/20 to-cyan-500/20";
  } else if (value < 20) {
    icon = "🧥";
    title = "Cold";
    message = "Keep yourself warm and hydrated.";
    bgColor = "from-sky-500/20 to-blue-500/20";
  } else if (value < 35) {
    icon = "😊";
    title = "Comfortable";
    message = "Great weather for daily activities.";
    bgColor = "from-green-500/20 to-emerald-500/20";
  } else if (value < 50) {
    icon = "☀️";
    title = "Warm";
    message = "Drink plenty of water and stay refreshed.";
    bgColor = "from-yellow-500/20 to-orange-500/20";
  } else if (value < 80) {
    icon = "🔥";
    title = "Hot";
    message = "Stay hydrated and avoid prolonged heat exposure.";
    bgColor = "from-orange-500/20 to-red-500/20";
  } else {
    icon = "🚨🔥";
    title = "Extreme Heat";
    message = "Dangerous temperature conditions. Avoid direct exposure.";
    bgColor = "from-red-500/30 to-rose-500/30";
  }

  return (
    <div
      className={`max-w-xl w-full mt-8 bg-gradient-to-r ${bgColor}
      backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-xl`}
    >
      <div className="text-7xl mb-4 animate-pulse">
        {icon}
      </div>

      <h2 className="text-3xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-slate-200 mb-4">
        {message}
      </p>

      <div className="text-sm text-slate-300">
        Current Temperature: {value.toFixed(1)}°C
      </div>
    </div>
  );
}

export default TemperatureStatus;