import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) return;

    onValidated({
      EMAIL: email,
    });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to my Newsletter <br /> & stay updated on my latest
              projects, tech experiments & dev journey 🚀
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && (
              <Alert variant="danger">{message}</Alert>
            )}
            {status === "success" && (
              <Alert variant="success">{message}</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join 🚀"
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
