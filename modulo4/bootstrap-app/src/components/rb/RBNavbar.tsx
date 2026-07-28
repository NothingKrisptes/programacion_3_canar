// src/components/rb/RBNavbar.tsx

import { NavLink }                       from 'react-router-dom'
import { Navbar, Container, Nav }        from 'react-bootstrap'

export default function RBNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="border-bottom border-secondary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          DevCursos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-1">
            <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Proyectos</Nav.Link>
            <Nav.Link as={NavLink} to="/about">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}