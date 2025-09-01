import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card, InputGroup} from "react-bootstrap";
import {FaUser, FaEnvelope, FaLock, FaPhone, FaCity, FaBirthdayCake, FaGoogle, FaFacebook} from "react-icons/fa"

export default function HotelSignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    dob: "",
    membership: false,
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url("/featured-section3.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position:"relative"
      }}
    >
           <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>
      <Container style={{minHeight:"100vh" ,position:"relative", zIndex: 1}}>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Card
              className="shadow-lg"
              style={{
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}>

              <Card.Body className="p-5">
                <h2 className="text-center mb-4 fw-bold" style={{ color: "#5A4634" }}>
                  Hotel Membership Signup
                </h2>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <InputGroup>
                    <InputGroup.Text><FaUser/></InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "12px" }}
                    />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup>
                    <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "12px" }}
                    />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                    <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "12px" }}
                    />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                     <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "12px" }}
                    />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                     <InputGroup>
                      <InputGroup.Text>
                        <FaPhone />
                      </InputGroup.Text>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ borderRadius: "12px" }}
                    />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaCity />
                      </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter your city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={{ borderRadius: "12px" }}
                    /> </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <InputGroup>
                     <InputGroup.Text>
                        <FaBirthdayCake />
                      </InputGroup.Text>
                    <Form.Control
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      style={{ borderRadius: "12px" }}
                    /></InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Check
                      type="checkbox"
                      label="Join our Exclusive Membership Program"
                      name="membership"
                      checked={formData.membership}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Subscribe to our Newsletter for offers"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    variant="dark"
                    type="submit"
                    className="w-100 py-2 fw-bold"
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#5A4634",
                      border: "none",
                    }}
                  >
                    Sign Up
                  </Button>
                </Form>
                <div className="text-center my-3">
                  <span style={{ fontWeight: "bold", color: "#5A4634" }}>OR</span>
                </div>

                {/* Social Buttons */}
                <Button
                  variant="light"
                  className="w-100 mb-2 d-flex align-items-center justify-content-center"
                  style={{ borderRadius: "12px", border: "1px solid #ccc" }}
                >
                  <FaGoogle style={{ marginRight: "8px", color: "#DB4437" }} />
                  Sign up with Google
                </Button>
                <Button
                  variant="primary"
                  className="w-100 d-flex align-items-center justify-content-center"
                  style={{ borderRadius: "12px", backgroundColor: "#3b5998", border: "none" }}
                >
                  <FaFacebook style={{ marginRight: "8px" }} />
                  Sign up with Facebook
                </Button>

                <div className="text-center mt-3">
                  <small>
                    Already have an account?{" "}
                    <a href="/login" className="fw-bold" style={{ color: "#5A4634" }}>
                      Login here
                    </a>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
