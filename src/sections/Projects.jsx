import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {

  const projects = [
    {
      title: "Personal Portfolio Website",
      desc: "Designed and developed a fully responsive personal portfolio using React.js, Bootstrap, and custom CSS. Implemented smooth navigation, reusable components, and modern UI design principles.",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/MANSIRAJUSHINDE/SUMAGO-INTERNSHIP/tree/master/FRONTEND/fourthapp",
      live: "#"
    },
    {
      title: "Expense Tracker App",
      desc: "Built a React app to track income and expenses with real-time updates.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/MANSIRAJUSHINDE/zoblik-internships-2024-25/tree/main/zoblik-month-2/zapp",
      live: "#"
    },
    {
      title: "Osteoporosis Prediction",
      desc: "Built a machine learning–based web application to predict osteoporosis risk using patient data.",
      img: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=900&q=80",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container fluid="lg">

        <h2 className="text-center mb-5 green-text fw-bold display-6">
          Projects
        </h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card className="project-card h-100">

                <Card.Img
                  variant="top"
                  src={project.img}
                  className="project-img"
                />

                <Card.Body className="d-flex flex-column">

                  <Card.Title className="fw-bold project-title">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="text-secondary flex-grow-1">
                    {project.desc}
                  </Card.Text>

                  <div className="mt-3">

                    {project.live !== "#" && (
                      <Button
                        className="green-btn me-2"
                        href={project.live}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    )}

                    {project.github !== "#" && (
                      <Button
                        variant="outline-light"
                        href={project.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}

                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Projects;