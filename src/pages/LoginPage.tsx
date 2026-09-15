import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@school.com')
  const [password, setPassword] = useState('demo123')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const lower = email.toLowerCase()
    if (lower.includes('parent')) {
      navigate('/parent')
      return
    }

    if (lower.includes('teacher')) {
      navigate('/attendance')
      return
    }

    navigate('/admin')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-lg font-bold text-white">SB</div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Basaveshwara Attendance</h1>
          <p className="mt-1 text-sm text-slate-500">Shri Basaveshwara High School • Yaragatti</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email or Phone</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition focus:border-blue-500"
              placeholder="admin@school.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full rounded-xl bg-blue-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">Login</button>
        </form>
      </div>
    </div>
  )
}
