function History({ history, clearHistory }) {
  return (
    <div className="max-w-xl w-full mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          📜 Recent Conversions
        </h2>

        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="px-3 py-1 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
          >
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-slate-400">
            No conversions yet.
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Start converting temperatures to see history here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-cyan-500/30 transition"
            >
              <span className="text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-5 text-center text-sm text-slate-400">
          Total Conversions: {history.length}
        </div>
      )}
    </div>
  );
}

export default History;