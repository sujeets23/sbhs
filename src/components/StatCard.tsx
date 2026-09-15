import type { ReactNode } from 'react'

type Props = {
  title: string
  value: string
  helper: string
  icon: ReactNode
}

export function StatCard({ title, value, helper, icon }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="rounded-xl bg-blue-50 p-2 text-blue-700">{icon}</div>
      </div>
      <p className="mt-4 text-xs text-slate-500">{helper}</p>
    </div>
  )
}
