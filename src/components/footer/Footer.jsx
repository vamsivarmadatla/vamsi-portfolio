import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="noPadding main-background">
      <Container>
        <Row>
          <Col className="mt-3">
            <hr />
            <p className="copyright">
              Copyright ©2021 Vamsi-Varma | All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
