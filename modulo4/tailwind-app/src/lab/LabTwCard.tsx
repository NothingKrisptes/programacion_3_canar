// src/lab/LabTwCard.tsx

interface CourseCardProps {
  title:    string
  level:    'Básico' | 'Intermedio' | 'Avanzado'
  duration: string
  tag?:     string
}

const LEVEL_COLORS: Record<CourseCardProps['level'], string> = {
  Básico:     'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Intermedio: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Avanzado:   'border-red-400/30 bg-red-400/10 text-red-300',
}

function CourseCard({ title, level, duration, tag }: CourseCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
      <div className="flex items-center justify-between">
        <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${LEVEL_COLORS[level]}`}>
          {level}
        </span>
        {tag && (
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-0.5 text-xs text-white/60">
            {tag}
          </span>
        )}
      </div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-sm text-white/60">Duración: {duration}</p>
      <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition">
        Ver curso →
      </button>
    </div>
  )
}

export default function LabTwCard() {
  const courses: CourseCardProps[] = [
    { title: 'React + TypeScript', level: 'Básico',     duration: '12h', tag: 'Nuevo'   },
    { title: 'Hooks avanzados',    level: 'Intermedio', duration: '8h',  tag: 'Popular' },
    { title: 'Testing + Vitest',   level: 'Avanzado',   duration: '6h'                  },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Cards</h2>
      <p className="text-white/60 mb-6 text-sm">Cards tipadas con variante de nivel.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {courses.map(c => <CourseCard key={c.title} {...c} />)}
      </div>
    </main>
  )
}