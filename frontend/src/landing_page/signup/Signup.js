import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const ZerodhaSignup = () => {
  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1 className="fw-bold">Open a free demat & trading account online</h1>
          <p className="text-muted">
            Start investing brokerage free and join a community of 1.5+ crore investors and traders
          </p>
          
          <div className="d-flex justify-content-center mb-4">
            <img src="/media/images/signup.png" alt="Kite Platform" className="img-fluid w-75" />
          </div>

          <h4 className="fw-semibold">Signup now</h4>
          <p className="text-muted">Or track your existing application</p>

          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" width="20" alt="India Flag" />
                +91
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Enter your mobile number" />
            </InputGroup>
            <Button variant="primary" className="w-100">Get OTP</Button>
          </Form>

          <p className="mt-3 text-muted">
            By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ZerodhaSignup;
