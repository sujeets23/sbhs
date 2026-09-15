const stats = [
  { label: 'Attendance %', value: '92%' },
  { label: 'Present', value: '110' },
  { label: 'Absent', value: '5' },
  { label: 'Late', value: '3' },
]

export default function ParentDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Parent Portal</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Welcome, Sanjay Patil</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Child Overview</h2>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-slate-900">Rahul Patil</div>
            <div className="text-sm text-slate-500">Class 9-A • Roll 12</div>
          </div>
          <div className="rounded-lg bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">Good attendance</div>
        </div>
      </div>
    </div>
  )
}
