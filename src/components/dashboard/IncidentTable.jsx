export default function IncidentTable({ incidents = [] }) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-2">Time</th>
          <th className="p-2">Type</th>
          <th className="p-2">Site</th>
        </tr>
      </thead>
      <tbody>
        {incidents.map((inc) => (
          <tr key={inc.id} className="border-b">
            <td className="p-2">{new Date(inc.timestamp).toLocaleString()}</td>
            <td className="p-2">{inc.type}</td>
            <td className="p-2">{inc.siteId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}