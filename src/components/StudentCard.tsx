import { UserRound } from 'lucide-react'

type Props = {
  name: string
  roll: number
  className: string
  section: string
  status: 'present' | 'absent' | 'late' | 'leave'
}

const statusStyles = {
  present: 'bg-emerald-100 text-emerald-700',
  absent: 'bg-red-100 text-red-700',
  late: 'bg-amber-100 text-amber-700',
  leave: 'bg-blue-100 text-blue-700',
}

export function StudentCard({ name, roll, className, section, status }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <UserRound size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{className}-{section} • Roll {roll}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-slate-500">Status</span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </div>
  )
}
