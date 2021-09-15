import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="noPadding main-background">
      <Container>
        <Row>
          <Col className="mt-5">
            <div className="footer">
              <hr />
              <p className="copyright">
                Copyright ©2021 Vamsi-Varma | All Rights Reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
