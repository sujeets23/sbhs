const notifications = [
  { student: 'Rahul Patil', parent: 'Sanjay Patil', message: 'Marked absent for 15 Sep 2026', channel: 'SMS', status: 'Sent', date: '2026-09-15' },
  { student: 'Priya Naik', parent: 'Anita Naik', message: 'Attendance updated', channel: 'WhatsApp', status: 'Pending', date: '2026-09-14' },
]

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Notifications</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Absence Notifications</h1>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Student</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Parent</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Message</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Channel</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {notifications.map((item) => (
              <tr key={`${item.student}-${item.date}`} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-800">{item.student}</td>
                <td className="px-4 py-3 text-slate-600">{item.parent}</td>
                <td className="px-4 py-3 text-slate-600">{item.message}</td>
                <td className="px-4 py-3 text-slate-600">{item.channel}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.status === 'Sent' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
