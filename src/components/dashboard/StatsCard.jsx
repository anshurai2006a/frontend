export default function StatsCard({ label, value, color = 'blue' }) {
  return (
    <div className={`p-4 rounded-lg bg-${color}-50 border border-${color}-200`}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}