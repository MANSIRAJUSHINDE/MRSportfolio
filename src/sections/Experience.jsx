import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserTie, FaBuilding, FaCalendarAlt } from "react-icons/fa";

function Experience() {
  const internships = [
    {
      role: "Full Stack Development Using React",
      company: "Sumago Infotech Pvt. Ltd, Pune",
      duration: "26th Dec 2024 – 6th Feb 2025"
    },
    {
      role: "React.js Intern",
      company: "ZobLik International, Bangalore (Remote)",
      duration: "24th Dec 2024 – 24th Feb 2025"
    },
    {
      role: "Frontend Development Intern",
      company: "Pearlthoughts, Tamil Nadu (Remote)",
      duration: "22nd Jul 2025 – 18th Aug 2025"
    }
  ];

  return (
    <section id="experience" className="py-5">
      <Container fluid="lg">

        <h2 className="text-center mb-5 green-text fw-bold display-6">
          Internships
        </h2>

        <Row className="justify-content-center">
          <Col xs={12} lg={10}>

            {internships.map((item, index) => (
              <Card className="internship-card-horizontal mb-4" key={index}>
                <Card.Body>
                  <Row className="align-items-center">

                    {/* Left Icon */}
                    <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
                      <div className="intern-icon">
                        <FaUserTie />
                      </div>
                    </Col>

                    {/* Right Content */}
                    <Col xs={12} md={10}>
                      <h5 className="intern-role">
                        {item.role}
                      </h5>

                      <p className="intern-company mb-1">
                        <FaBuilding className="me-2 icon-green" />
                        {item.company}
                      </p>

                      <p className="intern-duration">
                        <FaCalendarAlt className="me-2 icon-green" />
                        {item.duration}
                      </p>
                    </Col>

                  </Row>
                </Card.Body>
              </Card>
            ))}

          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Experience;