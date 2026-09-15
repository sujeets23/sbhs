import { BarChart3, BookOpenCheck, CalendarCheck2, ClipboardList, Users } from 'lucide-react'
import { StatCard } from '../components/StatCard'

const cards = [
  { title: 'Total Students', value: '482', helper: '+12 this month', icon: <Users size={18} /> },
  { title: 'Present Today', value: '427', helper: '88.4% attendance', icon: <CalendarCheck2 size={18} /> },
  { title: 'Absent Today', value: '21', helper: '4.4% of total', icon: <ClipboardList size={18} /> },
  { title: 'Notifications Sent', value: '18', helper: '6 failed retries', icon: <BookOpenCheck size={18} /> },
]

export default function DashboardPage() {
  const handleExportReport = () => {
    const rows = [
      ['Date', 'Present', 'Absent', 'Attendance %'],
      ['2026-09-15', '427', '21', '94.6%'],
      ['2026-09-14', '420', '23', '94.8%'],
      ['2026-09-13', '412', '30', '93.2%'],
    ]

    const csv = rows.map((row) => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'attendance-report.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">School Attendance Dashboard</h1>
        </div>
        <button onClick={handleExportReport} className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800">Export report</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <StatCard key={card.title} title={card.title} value={card.value} helper={card.helper} icon={card.icon} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Daily Attendance</h2>
            <BarChart3 className="text-slate-500" size={18} />
          </div>
          <div className="grid grid-cols-5 gap-2 text-center text-xs text-slate-500">
            {[30, 40, 55, 48, 68].map((value, index) => (
              <div key={index} className="rounded-xl bg-slate-100 p-3">
                <div className="mb-2 h-20 rounded-lg bg-gradient-to-t from-blue-100 to-blue-500" style={{ height: `${value}%` }} />
                <div>{['Mon','Tue','Wed','Thu','Fri'][index]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Class-wise Attendance</h2>
          <div className="space-y-3">
            {[
              { name: '8th', value: 91 },
              { name: '9th', value: 87 },
              { name: '10th', value: 89 },
            ].map((row) => (
              <div key={row.name}>
                <div className="mb-1 flex justify-between text-sm text-slate-600">
                  <span>{row.name}</span>
                  <span>{row.value}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-100">
                  <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${row.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
