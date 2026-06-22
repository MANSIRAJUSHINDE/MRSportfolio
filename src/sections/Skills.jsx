import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "SQL", icon: "devicon-mysql-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "Jupyter Notebook", icon: "devicon-jupyter-plain colored" },
    { name: "REST API", icon: "devicon-fastapi-plain colored" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "DSA", icon: "devicon-algorithm-plain" }
  ];

  return (
    <section id="skills" className="py-5">
      <Container fluid="lg">
        <Row className="justify-content-center">
          <Col xs={12}>
            <Card className="card-magic skill-container text-center">
              <Card.Body>

                <h2 className="green-text fw-bold mb-5 display-6">
                  Technical Skills
                </h2>

                <Row className="g-4 justify-content-center">
                  {skills.map((skill, index) => (
                    <Col
                      xs={4}   // 3 per row mobile
                      sm={3}   // 4 per row small
                      md={3}   // 4 per row medium
                      lg={2}   // 6 per row large
                      xl={2}   // 6 per row extra large
                      key={index}
                    >
                      <div className="skill-box">
                        <i
                          className={skill.icon}
                          style={{ fontSize: "38px" }}
                        ></i>
                        <p className="skill-text mt-2">
                          {skill.name}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;