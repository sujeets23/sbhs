import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

export function getAttendanceColor(status: string) {
  switch (status) {
    case 'present':
      return 'bg-emerald-100 text-emerald-900 border-emerald-200'
    case 'absent':
      return 'bg-red-100 text-red-900 border-red-200'
    case 'late':
      return 'bg-amber-100 text-amber-900 border-amber-200'
    case 'leave':
      return 'bg-sky-100 text-sky-900 border-sky-200'
    default:
      return 'bg-slate-100 text-slate-800 border-slate-200'
  }
}

export function getAttendanceLabel(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1)
}
