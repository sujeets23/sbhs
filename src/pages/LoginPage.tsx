export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-lg font-bold text-white">SB</div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Basaveshwara Attendance</h1>
          <p className="mt-1 text-sm text-slate-500">Shri Basaveshwara High School • Yaragatti</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email or Phone</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="admin@school.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-blue-900 px-4 py-3 text-sm font-semibold text-white">Login</button>
        </form>
      </div>
    </div>
  )
}
