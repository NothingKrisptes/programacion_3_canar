// src/components/tw/TwNewsletter.tsx

import { useState } from 'react'

export default function TwNewsletter() {
  const [email,   setEmail]   = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(true)
    setEmail('')
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <section className="border-t border-white/10 bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-2">Mantente actualizado</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Recibe novedades sobre nuevos cursos y contenido exclusivo.
        </p>

        {success && (
          <div className="mb-6 inline-block rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-emerald-300 text-sm">
            ✅ Suscripción registrada (demo)
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            required
            className="h-11 w-72 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          <button
            type="submit"
            className="h-11 rounded-xl bg-blue-600 px-6 font-semibold text-white hover:bg-blue-500 transition"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  )
}