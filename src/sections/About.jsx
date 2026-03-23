import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <section id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="card-magic text-center">
              <Card.Body>
                <h2 className="mb-4 green-text">About Me</h2>
                <p className="text-secondary">
                 I am a final-year Computer Engineering student with a strong interest in web development and full-stack technologies. I have hands-on experience working with React.js, Node.js, Express.js, MongoDB, and SQL through internships and academic projects.

I enjoy building responsive and user-friendly web applications and continuously improving my technical skills. I am a quick learner, hardworking, and eager to start my professional career where I can contribute to real-world projects and grow with the organization.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;