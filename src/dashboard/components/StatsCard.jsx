// Stats Card Component
function StatsCard({ title, value, icon, color, change }) {
  return (
    <div className="p-6 bg-gray-200 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
        {change && (
          <span className={`text-sm px-2 py-1 rounded text-white ${
            change > 0 ? ' bg-green-400 ' : ' bg-red-400 '
          }`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="mb-1 text-sm text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-[var(--primary-color)]">{value}</p>
    </div>
  );
}
export default StatsCard
