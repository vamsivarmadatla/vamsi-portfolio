import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./About.css";
import "./AboutRes.css";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import resume from "../../assets/vamsi-resume.pdf";

const About = () => {
  return (
    <>
      <Row className="noPadding main-background">
        <Col className="noPadding mt-5">
          <Container>
            <div className="aboutme-title" id="aboutme">
              ABOUT <span> ME</span>
            </div>

            <div className="aboutme-personal  mt-5">
              <p className="aboutme-sub-title">PERSONAL INFOS</p>
              <Row className="mt-4 mb-4">
                <Col sm={6} lg={3} className=" mb-2">
                  <p className="aboutme-personal-info">
                    Full Name : <span>Vamsi Varma Datla</span>
                  </p>

                  <p className="aboutme-personal-info">
                    Age : <span>25 Years</span>
                  </p>

                  <p className="aboutme-personal-info">
                    Nationality : <span>Indian</span>
                  </p>
                  <p className="aboutme-personal-info">
                    Marital Status : <span>Single</span>
                  </p>
                  <p className="aboutme-personal-info">
                    Freelance : <span>Available</span>
                  </p>
                </Col>
                <Col className=" aboutme-personal-col2 mb-2">
                  <p className="aboutme-personal-info">
                    Address : <span>Ongole</span>
                  </p>
                  <p className="aboutme-personal-info">
                    Phone : <span>+91 7013035132</span>
                  </p>
                  <p className="aboutme-personal-info">
                    Email : <span>dvamsivarma619@gmail.com</span>
                  </p>
                  <p className="aboutme-personal-info">
                    Skype :{" "}
                    <span>live:.cid.60c830c72bb7ff99 (Vamsi Varma)</span>
                  </p>
                  <p className="aboutme-personal-info">
                    Languages : <span>English, Hindi, Telugu</span>
                  </p>
                </Col>

                <Col lg={6} className=" mb-2">
                  <div className="aboutme-personal-experience  mt-2">
                    <Row>
                      <Col>
                        <div className="box-stats">
                          <h3 className="box-experience">2</h3>
                          <p className="box-year">YEARS OF EXPERIENCE</p>
                        </div>
                      </Col>
                      <Col>
                        <div className="box-stats">
                          <h3 className="box-experience">3</h3>
                          <p className="box-year">COMPLETED PROJECTS</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="downloadcv-section mb-4">
              <Button
                variant="outline-warning"
                className="download-cv"
                href={resume}
                download="Vamsi-Resume"
              >
                DOWNLOAD CV
                <div className="downloadcv-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
              </Button>
            </div>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default About;
