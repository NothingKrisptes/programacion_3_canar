// src/pages/AboutTW.tsx

export default function ContactUsTW() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Contactanos</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Telefono: +1 (123) 666-8888
             </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Correo electronico: compañia@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Direccion: Carapungo
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Redes Sociales:
              <ul>
                <li>
                  < a href="https://twiter.com" className="text-blue 400"> Twitter </a>
                </li>
                <li>
                  < a href="https://twiter.com" className="text-blue 400"> Instragram </a>
                </li>
                <li>
                  < a href="https://twiter.com" className="text-blue 400"> Facebook </a>
                </li>
              </ul>
            </li>
           
          </ul>
        </div>
      </div>
    </main>
  )
}