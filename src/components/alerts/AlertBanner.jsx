export default function AlertBanner({ alerts = [] }) {
  return (
    <div className="absolute top-0 w-full z-10">
      {alerts.map((alert) => (
        <div key={alert.id} className="bg-red-600 text-white p-3 text-center animate-pulse">
          ⚠️ {alert.message}
        </div>
      ))}
    </div>
  );
}