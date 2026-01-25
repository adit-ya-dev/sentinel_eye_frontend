export default function RecentScansTable() {
  const scans = [
    {
      id: "SCAN-1001",
      region: "New Delhi",
      status: "COMPLETED",
      severity: "CRITICAL",
      time: "2 min ago",
    },
    {
      id: "SCAN-1002",
      region: "Agra",
      status: "COMPLETED",
      severity: "WARNING",
      time: "18 min ago",
    },
    {
      id: "SCAN-1003",
      region: "Noida",
      status: "PROCESSING",
      severity: "—",
      time: "Just now",
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#071225] p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Recent Scans
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="px-4 py-3 text-left">Scan ID</th>
              <th className="px-4 py-3 text-left">Region</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Severity</th>
              <th className="px-4 py-3 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {scans.map((s) => (
              <tr
                key={s.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-4 py-3 font-semibold">{s.id}</td>
                <td className="px-4 py-3 text-white/70">{s.region}</td>
                <td className="px-4 py-3 text-white/70">{s.status}</td>
                <td className="px-4 py-3 font-bold text-red-400">
                  {s.severity}
                </td>
                <td className="px-4 py-3 text-white/50">{s.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
