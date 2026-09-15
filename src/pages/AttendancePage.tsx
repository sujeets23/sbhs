import { useMemo, useState } from 'react'
import { CalendarDays, Check, Save } from 'lucide-react'
import { AttendanceStatusButton } from '../components/AttendanceStatusButton'

const sampleStudents = [
  { id: '1', name: 'Rahul Patil', roll: 1 },
  { id: '2', name: 'Sneha Kulkarni', roll: 2 },
  { id: '3', name: 'Amit Desai', roll: 3 },
  { id: '4', name: 'Priya Naik', roll: 4 },
]

type Status = 'present' | 'absent' | 'late' | 'leave'

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState('2026-09-15')
  const [statusMap, setStatusMap] = useState<Record<string, Status>>(() =>
    Object.fromEntries(sampleStudents.map((student) => [student.id, 'present'])),
  )
  const [toast, setToast] = useState('')

  const handleSelect = (studentId: string, value: Status) => {
    setStatusMap((prev) => ({ ...prev, [studentId]: value }))
    setToast('Attendance updated for selected student.')
  }

  const handleMarkAllPresent = () => {
    const next: Record<string, Status> = Object.fromEntries(
      sampleStudents.map((student) => [student.id, 'present' as Status]),
    )
    setStatusMap(next)
    setToast('All students marked present.')
  }

  const handleSaveAttendance = () => {
    const saved = Object.entries(statusMap)
      .map(([id, status]) => ({ studentId: id, status }))
      .filter((entry) => entry.status === 'absent' || entry.status === 'late' || entry.status === 'leave' || entry.status === 'present')

    setToast(`Attendance saved for ${saved.length} students on ${selectedDate}.`)
  }

  const absentCount = useMemo(
    () => Object.values(statusMap).filter((status) => status === 'absent').length,
    [statusMap],
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Attendance</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Take Attendance</h1>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm text-slate-600">
            <span className="mb-1 block">Academic Year</span>
            <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500">
              <option>2026-27</option>
            </select>
          </label>
          <label className="text-sm text-slate-600">
            <span className="mb-1 block">Class</span>
            <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500">
              <option>9th A</option>
            </select>
          </label>
          <label className="text-sm text-slate-600">
            <span className="mb-1 block">Date</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:border-blue-500"
            />
          </label>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-600">
            <CalendarDays size={16} />
            <span className="text-sm font-medium">Date: 15 Sep 2026</span>
          </div>
          <button
            type="button"
            onClick={handleMarkAllPresent}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 sm:text-sm"
          >
            Mark All Present
          </button>
        </div>

        <div className="hidden grid-cols-[0.8fr_2fr_1.2fr_1.5fr] gap-3 border-b border-slate-200 pb-3 text-sm font-semibold text-slate-600 md:grid">
          <span>Roll No</span>
          <span>Student</span>
          <span>Status</span>
          <span>Remarks</span>
        </div>

        <div className="mt-4 space-y-4">
          {sampleStudents.map((student) => {
            const currentStatus = statusMap[student.id] ?? 'present'
            return (
              <div
                key={student.id}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-[0.8fr_2fr_1.2fr_1.5fr] md:items-center"
              >
                <div className="font-semibold text-slate-900">{String(student.roll).padStart(2, '0')}</div>
                <div>
                  <div className="font-medium text-slate-800">{student.name}</div>
                  <div className="text-xs text-slate-500">Class 9-A</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <AttendanceStatusButton label="Present" value="present" selected={currentStatus === 'present'} onSelect={(value) => handleSelect(student.id, value)} />
                  <AttendanceStatusButton label="Absent" value="absent" selected={currentStatus === 'absent'} onSelect={(value) => handleSelect(student.id, value)} />
                  <AttendanceStatusButton label="Late" value="late" selected={currentStatus === 'late'} onSelect={(value) => handleSelect(student.id, value)} />
                  <AttendanceStatusButton label="Leave" value="leave" selected={currentStatus === 'leave'} onSelect={(value) => handleSelect(student.id, value)} />
                </div>
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="Add remarks" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Check className="text-emerald-600" size={16} />
            <span>{absentCount} absent marked</span>
          </div>
          <button
            type="button"
            onClick={handleSaveAttendance}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            <Save size={16} />
            Save Attendance
          </button>
        </div>

        {toast && (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            {toast}
          </div>
        )}
      </div>
    </div>
  )
}
