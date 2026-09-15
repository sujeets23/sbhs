export default function ClassesPage() {
  const classes = [
    { name: '8th A', students: 38, teacher: 'S. A. Patil' },
    { name: '9th A', students: 36, teacher: 'R. M. Kulkarni' },
    { name: '10th B', students: 34, teacher: 'N. S. Chavan' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Classes</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Class Management</h1>
        </div>
        <button className="rounded-xl bg-blue-900 px-4 py-2.5 text-sm font-medium text-white">Add Class</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {classes.map((classItem) => (
          <div key={classItem.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">{classItem.name}</h2>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">Active</span>
            </div>
            <div className="mt-5 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between"><span>Students</span><span className="font-medium text-slate-900">{classItem.students}</span></div>
              <div className="flex justify-between"><span>Class Teacher</span><span className="font-medium text-slate-900">{classItem.teacher}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
