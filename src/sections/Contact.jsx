import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact">
      <Container>

        <h2 className="text-center mb-5 green-text">Contact Me</h2>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="card-magic">
              <Card.Body>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={4} placeholder="Message" />
                  </Form.Group>

                  <Button className="green-btn w-100">
                    Send Message
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Contact;