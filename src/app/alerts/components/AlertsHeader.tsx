export default function AlertsHeader({ total }: { total: number }) {
  return (
    <div className="py-6 border-b border-border/50 mb-4">
      <h1 className="text-2xl font-black text-foreground tracking-tight uppercase italic">
        Alerts
      </h1>

      <p className="mt-1 text-sm font-bold text-muted-foreground uppercase tracking-wider">
        Environmental Threat Records <span className="mx-1 opacity-30">•</span>
        Active alerts: <span className="text-primary">{total}</span>
      </p>
    </div>
  );
}
