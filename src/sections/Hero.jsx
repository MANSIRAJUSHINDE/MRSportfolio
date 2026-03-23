import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100">
      <Container>
        <Row className="align-items-center">

          {/* LEFT SIDE */}
          <Col xs={12} md={6} className="text-center text-md-start">

            <h1 className="fw-bold display-4 mb-4">
              Crafting <span className="green-text">Dark Magic</span>
              <br /> Web Experiences
            </h1>

            <p className="fs-5 text-secondary mb-4">
              I design and develop high-performance full stack
              applications with modern UI, smooth UX,
              and scalable backend systems.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              
              <Button className="green-btn" href="#projects">
                View Projects
              </Button>

              <Button variant="outline-light" href="#contact">
                Contact Me
              </Button>

            </div>

          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col xs={12} md={6} className="text-center mt-5 mt-md-0">

            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
              alt="Developer"
              className="img-fluid"
              style={{
                borderRadius: "20px",
                boxShadow: "0 25px 50px rgba(0, 255, 136, 0.15)"
              }}
            />

          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;