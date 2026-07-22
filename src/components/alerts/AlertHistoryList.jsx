export default function AlertHistoryList({ alerts = [] }) {
  return (
    <ul className="divide-y divide-gray-200">
      {alerts.map((alert) => (
        <li key={alert.id} className="p-3 flex justify-between">
          <span>{alert.message}</span>
          <span className="text-gray-400 text-sm">
            {new Date(alert.id).toLocaleTimeString()}
          </span>
        </li>
      ))}
    </ul>
  );
}