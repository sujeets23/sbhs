import { cn } from '../lib/utils'

type Props = {
  label: string
  value: 'present' | 'absent' | 'late' | 'leave'
  selected: boolean
  onSelect: (value: 'present' | 'absent' | 'late' | 'leave') => void
}

const styles = {
  present: 'bg-emerald-500 text-white hover:bg-emerald-600',
  absent: 'bg-red-500 text-white hover:bg-red-600',
  late: 'bg-amber-400 text-slate-900 hover:bg-amber-500',
  leave: 'bg-blue-500 text-white hover:bg-blue-600',
}

export function AttendanceStatusButton({ label, value, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={cn(
        'rounded-xl border px-3 py-2 text-sm font-medium transition sm:px-4',
        selected ? 'ring-2 ring-offset-1 ring-slate-300' : 'border-slate-200 bg-white text-slate-700',
        selected && styles[value],
      )}
    >
      {label}
    </button>
  )
}
