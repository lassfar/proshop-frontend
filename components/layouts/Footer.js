import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container fluid>
        <Row>
          <Col className="text-center py-3 bg-primary text-light">
            Proshop &copy; {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
