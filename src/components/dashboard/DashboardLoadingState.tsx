type DashboardLoadingStateProps = {
  sectionLabel: string;
  detailLabel: string;
  tableRows?: number;
};

export function DashboardLoadingState({
  sectionLabel,
  detailLabel,
  tableRows = 4,
}: DashboardLoadingStateProps) {
  return (
    <div className="relative overflow-hidden space-y-6 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 animate-pulse bg-linear-to-r from-transparent via-white/5 to-transparent opacity-40" />

      <div className="relative flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-inner shadow-black/30" />
        <div className="space-y-3">
          <div className="h-8 w-56 rounded-full bg-zinc-800/80" />
          <div className="h-4 w-80 rounded-full bg-zinc-800/60" />
        </div>
      </div>

      <div className="relative grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="h-4 w-28 rounded-full bg-zinc-800/80" />
            <div className="mt-4 h-8 w-24 rounded-full bg-zinc-800/70" />
            <div className="mt-3 h-3 w-36 rounded-full bg-zinc-800/50" />
          </div>
        ))}
      </div>

      <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <div className="h-5 w-48 rounded-full bg-zinc-800/80" />
            <div className="h-3 w-72 rounded-full bg-zinc-800/50" />
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-700 border-t-red-500" />
            <span className="text-sm">Loading {sectionLabel.toLowerCase()}</span>
          </div>
        </div>

        <div className="mt-6 h-90 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60" />
      </div>

      <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
        <div className="h-5 w-40 rounded-full bg-zinc-800/80" />
        <div className="mt-2 h-3 w-72 rounded-full bg-zinc-800/50" />
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800">
          <div className="grid grid-cols-5 gap-3 border-b border-zinc-800 bg-zinc-900/80 p-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-4 rounded-full bg-zinc-800/80" />
            ))}
          </div>
          {Array.from({ length: tableRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-5 gap-3 border-b border-zinc-800/70 p-4 last:border-b-0">
              {Array.from({ length: 5 }).map((_, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`h-4 rounded-full ${cellIndex === 0 ? "w-3/4" : "w-full"} bg-zinc-800/60`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
        <div className="h-5 w-44 rounded-full bg-zinc-800/80" />
        <div className="mt-2 h-3 w-64 rounded-full bg-zinc-800/50" />
        <div className="mt-4 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-8 text-sm text-zinc-500">
          {detailLabel}
        </div>
      </div>
    </div>
  );
}