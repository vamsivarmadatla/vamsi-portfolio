import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ExpeEdu.css";
import "./ExpeEduRes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const ExpeEdu = () => {
  return (
    <>
      <Row className="noPadding main-background">
        <Col className="noPadding  mb-5">
          <Container>
            <Row className=" mt-4 mb-4">
              <Col lg={6} className="expeEdu-font-icon-col">
                <div className="ExpeEdu-title mt-5 mb-5">EXPERIENCE</div>
                <div className="experince-section">
                  <div className="expe-font-icon expeEdu">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="experince">
                    <span className="experince-year">2020 - PRESENT</span>
                    <h5 className="experince-name mt-2">
                      FRONT END DEVELOPER
                      <span className="experince-company">
                        Arokee Online Solutions
                      </span>
                    </h5>
                    <p className="experince-text">
                      I have an experience of around 2 years into software
                      development.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="expeEdu-font-icon-col">
                <div className="ExpeEdu-title mt-5 mb-5">EDUCATION</div>
                <div className="education-section">
                  <div className="edu-font-icon expeEdu">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <div className="education">
                    <span className="education-year">2018</span>
                    <h5 className="education-name mt-2">
                      ENGINEERING DEGREE
                      <span className="education-colg">JNTUK</span>
                    </h5>
                    <p className="education-text">
                      I have Under Graduated Bachelor’s of Mechanical
                      Engineering from the Jntuk University in 2018
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default ExpeEdu;
