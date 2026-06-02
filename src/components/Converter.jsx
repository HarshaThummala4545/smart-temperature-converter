import { useState, useEffect } from "react";
import History from "./History";
import TemperatureStatus from "./TemperatureStatus";

function Converter() {
  const [temp, setTemp] = useState("");
  const [from, setFrom] = useState("Celsius");
  const [to, setTo] = useState("Fahrenheit");
  const [result, setResult] = useState("");
  const [statusTemp, setStatusTemp] = useState(0);

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("temperatureHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "temperatureHistory",
      JSON.stringify(history)
    );
  }, [history]);

  const convertTemperature = () => {
    if (temp.trim() === "") return;

    const value = Number(temp);

    let celsius;

    switch (from) {
      case "Celsius":
        celsius = value;
        break;

      case "Fahrenheit":
        celsius = ((value - 32) * 5) / 9;
        break;

      case "Kelvin":
        celsius = value - 273.15;
        break;

      default:
        celsius = value;
    }

    let finalResult;

    switch (to) {
      case "Celsius":
        finalResult = celsius;
        break;

      case "Fahrenheit":
        finalResult = (celsius * 9) / 5 + 32;
        break;

      case "Kelvin":
        finalResult = celsius + 273.15;
        break;

      default:
        finalResult = celsius;
    }

    const convertedValue = finalResult.toFixed(2);

    setResult(convertedValue);

    setStatusTemp(celsius);

    const entry =
      `${temp} ${from} → ${convertedValue} ${to}`;

    setHistory((prev) => [entry, ...prev.slice(0, 9)]);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("temperatureHistory");
  };

  return (
    <>
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-6">
          Temperature Converter
        </h2>

        <input
          type="number"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          placeholder="Enter temperature..."
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none mb-4"
        />

        <div className="grid grid-cols-2 gap-4 mb-6">

          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-4 rounded-xl bg-slate-800 border border-slate-700"
          >
            <option>Celsius</option>
            <option>Fahrenheit</option>
            <option>Kelvin</option>
          </select>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-4 rounded-xl bg-slate-800 border border-slate-700"
          >
            <option>Celsius</option>
            <option>Fahrenheit</option>
            <option>Kelvin</option>
          </select>

        </div>

        <button
          onClick={convertTemperature}
          className="w-full py-4 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition duration-300"
        >
          Convert
        </button>

        {result && (
          <div className="mt-8 text-center">

            <p className="text-slate-400 mb-2">
              Converted Result
            </p>

            <h3 className="text-5xl font-bold text-cyan-400">
              {result}
            </h3>

            <p className="text-slate-400 mt-2">
              {to}
            </p>

          </div>
        )}
      </div>

      <TemperatureStatus value={statusTemp} />

      <History
        history={history}
        clearHistory={clearHistory}
      />
    </>
  );
}

export default Converter;