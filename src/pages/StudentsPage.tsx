export default function StudentsPage() {
  const students = [
    { name: 'Rahul Patil', className: '9th', section: 'A', roll: 1, attendance: '92%' },
    { name: 'Sneha Kulkarni', className: '9th', section: 'A', roll: 2, attendance: '96%' },
    { name: 'Amit Desai', className: '8th', section: 'B', roll: 5, attendance: '74%' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Students</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Student Management</h1>
        </div>
        <button className="rounded-xl bg-blue-900 px-4 py-2.5 text-sm font-medium text-white">Add Student</button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Student</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Class</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Roll</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Attendance</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {students.map((student) => (
              <tr key={student.name} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-800">{student.name}</td>
                <td className="px-4 py-3 text-slate-600">{student.className}-{student.section}</td>
                <td className="px-4 py-3 text-slate-600">{student.roll}</td>
                <td className="px-4 py-3 text-slate-600">{student.attendance}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
