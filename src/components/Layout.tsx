import { Bell, CalendarDays, Home, LogOut, School, Shield, UserRound } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', to: '/admin', icon: Home },
  { label: 'Attendance', to: '/attendance', icon: CalendarDays },
  { label: 'Students', to: '/students', icon: UserRound },
  { label: 'Classes', to: '/classes', icon: School },
  { label: 'Notifications', to: '/notifications', icon: Bell },
  { label: 'Settings', to: '/settings', icon: Shield },
]

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white p-5 lg:flex lg:flex-col">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-900 text-sm font-bold text-white">
            SB
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">School</div>
            <h1 className="text-lg font-semibold">Basaveshwara</h1>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-800 ring-1 ring-blue-200'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-slate-900 p-4 text-white">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-300">School admin</div>
          <div className="mt-2 text-sm font-semibold">Shri Basaveshwara High School</div>
          <button className="mt-4 inline-flex items-center gap-2 text-sm text-slate-200">
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </aside>

      <main className="lg:ml-72">
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between px-5 py-4 lg:px-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Shri Basaveshwara High School</p>
              <h2 className="text-xl font-semibold">Yaragatti</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">Teacher Portal</div>
            </div>
          </div>
        </header>

        <div className="p-5 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
