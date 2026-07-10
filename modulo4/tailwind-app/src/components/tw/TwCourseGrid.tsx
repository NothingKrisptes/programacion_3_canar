// src/components/tw/TwCourseGrid.tsx

interface Course {
  id:       number
  title:    string
  level:    'Básico' | 'Intermedio' | 'Avanzado'
  duration: string
  tag?:     string
}

const COURSES: Course[] = [
  { id: 1, title: 'React + TypeScript',   level: 'Básico',     duration: '12h', tag: 'Nuevo'   },
  { id: 2, title: 'Hooks avanzados',      level: 'Intermedio', duration: '8h',  tag: 'Popular' },
  { id: 3, title: 'Testing con Vitest',   level: 'Avanzado',   duration: '6h'                  },
  { id: 4, title: 'TanStack Query',       level: 'Intermedio', duration: '5h',  tag: 'Nuevo'   },
  { id: 5, title: 'React Router v7',      level: 'Básico',     duration: '4h'                  },
  { id: 6, title: 'Performance patterns', level: 'Avanzado',   duration: '7h',  tag: 'Popular' },
]

const LEVEL: Record<Course['level'], string> = {
  Básico:     'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Intermedio: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Avanzado:   'border-red-400/30 bg-red-400/10 text-red-300',
}

export default function TwCourseGrid() {
  return (
    <section className="bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold text-white mb-2">Cursos disponibles</h2>
        <p className="text-white/50 mb-8">Selecciona el nivel que mejor se adapte a ti.</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map(course => (
            <div
              key={course.id}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${LEVEL[course.level]}`}>
                  {course.level}
                </span>
                {course.tag && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs text-white/50">
                    {course.tag}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white">{course.title}</h3>
              <p className="text-sm text-white/50">Duración: {course.duration}</p>
              <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/70 hover:bg-white/10 transition">
                Ver curso →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}