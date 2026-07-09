// src/components/rb/RBCourseGrid.tsx

import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

interface Course {
  id:       number
  title:    string
  level:    'Básico' | 'Intermedio' | 'Avanzado'
  duration: string
  tag:      string
}

const COURSES: Course[] = [
  { id: 1, title: 'React + TypeScript',   level: 'Básico',     duration: '12h', tag: 'Nuevo'   },
  { id: 2, title: 'Hooks avanzados',      level: 'Intermedio', duration: '8h',  tag: 'Popular' },
  { id: 3, title: 'Testing con Vitest',   level: 'Avanzado',   duration: '6h',  tag: ''        },
  { id: 4, title: 'TanStack Query',       level: 'Intermedio', duration: '5h',  tag: 'Nuevo'   },
  { id: 5, title: 'React Router v7',      level: 'Básico',     duration: '4h',  tag: ''        },
  { id: 6, title: 'Performance patterns', level: 'Avanzado',   duration: '7h',  tag: 'Popular' },
]

const LEVEL_COLOR: Record<Course['level'], string> = {
  Básico:     'success',
  Intermedio: 'warning',
  Avanzado:   'danger',
}

export default function RBCourseGrid() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="fw-bold mb-1">Cursos disponibles</h2>
        <p className="text-muted mb-4">Selecciona el nivel que mejor se adapte a ti.</p>

        <Row className="g-3">
          {COURSES.map(course => (
            <Col key={course.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg={LEVEL_COLOR[course.level]}>{course.level}</Badge>
                    {course.tag && <Badge bg="dark">{course.tag}</Badge>}
                  </div>
                  <Card.Title className="fw-bold">{course.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Duración: {course.duration}
                  </Card.Text>
                  <Button variant="outline-primary" size="sm" className="mt-auto">
                    Ver curso
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}