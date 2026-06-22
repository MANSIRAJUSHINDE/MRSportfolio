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
                 I am <b className="green-text">Mansi Raju Shinde </b>, a passionate developer with a strong interest in Full-Stack Web Development and Machine Learning. I enjoy building modern, responsive, and user-focused applications while continuously learning new technologies and improving my problem-solving skills.

My technical expertise includes React.js, Node.js, Express.js, MongoDB, MySQL, JavaScript, and Python. I have worked on projects such as a Store Rating Web Application with role-based authentication, an Osteoporosis Prediction system using Machine Learning, and a MERN-based Expense Tracker. These projects have strengthened my understanding of web development, REST APIs, database management, and software design.

I am always excited to explore new challenges, collaborate on innovative projects, and contribute to meaningful solutions through technology. If you have any opportunities, collaborations, or projects that align with my skills and interests, feel free to reach out—I would love to connect and discuss how I can contribute.

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