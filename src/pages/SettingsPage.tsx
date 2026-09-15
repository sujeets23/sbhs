export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">School Settings</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">School Information</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div><label className="mb-1 block text-slate-600">School name</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2" value="Shri Basaveshwara High School" readOnly /></div>
            <div><label className="mb-1 block text-slate-600">Address</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2" value="Yaragatti" readOnly /></div>
            <div><label className="mb-1 block text-slate-600">Email</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2" value="school@example.com" /></div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Notification Settings</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div><label className="mb-1 block text-slate-600">SMS provider</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2" value="MSG91 / Twilio" /></div>
            <div><label className="mb-1 block text-slate-600">WhatsApp provider</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2" value="Meta WhatsApp Cloud API" /></div>
            <div><label className="mb-1 block text-slate-600">Email provider</label><input className="w-full rounded-xl border border-slate-200 px-3 py-2" value="Resend" /></div>
          </div>
        </section>
      </div>
    </div>
  )
}
