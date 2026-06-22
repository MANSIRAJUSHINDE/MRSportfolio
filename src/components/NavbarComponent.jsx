import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbar-magic py-3"
    >
      <Container>

        {/* Brand */}
        <Navbar.Brand href="#home" className="fw-bold fs-4 green-text">
          Mansi Raju Shinde
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 bg-light"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link href="#home" className="nav-link-magic">
              Home
            </Nav.Link>

            <Nav.Link href="#about" className="nav-link-magic">
              About
            </Nav.Link>

            <Nav.Link href="#skills" className="nav-link-magic">
              Skills
            </Nav.Link>

            <Nav.Link href="#projects" className="nav-link-magic">
              Projects
            </Nav.Link>

            {/* ✅ Added Internships */}
            <Nav.Link href="#experience" className="nav-link-magic">
              Internships
            </Nav.Link>

            <Nav.Link href="#contact" className="nav-link-magic">
              Contact
            </Nav.Link>

            <Button className="green-btn ms-lg-4 mt-3 mt-lg-0" href="https://drive.google.com/file/d/1rQuWJcVKbzPVAJKBnmcJ6sKFNv3Ek0EB/view?usp=drive_link" target="_blank">
              Resume
            </Button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarComponent;