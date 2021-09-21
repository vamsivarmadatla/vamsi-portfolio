import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import "./HomeRes.css";
import MainImage from "../../assets/images/vamsi-photo1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const handleMoreAbout = () => {
    const scrollTarget = document.getElementById("aboutme");
    scrollTarget.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Row className="noPadding main-background">
        <Col className="noPadding">
          <Container>
            <div className="aboutme-personal  mt-2">
              <Row className="mt-4 mb-4">
                <Col lg={6} className=" mb-2">
                  <div>
                    <Image className="home-section-image " src={MainImage} />
                  </div>
                </Col>

                <Col lg={6} className=" mb-2 mt-5">
                  <div className="mt-5">
                    <h1 className="home-section-title">I'M VAMSI VARMA.</h1>
                    <span className="home-section-title-span">
                      web developer
                    </span>
                  </div>
                  <div>
                    <p className="home-section-text">
                      I'm a Vamsi based front‑end web developer focused on
                      crafting clean & user‑friendly experiences, I am
                      passionate about building excellent software that improves
                      the lives of those around me.
                    </p>
                  </div>

                  <div className="downloadcv-section">
                    <Button
                      variant="outline-warning"
                      className="download-cv"
                      onClick={handleMoreAbout}
                    >
                      MORE ABOUT ME
                      <div className="downloadcv-icon">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Home;
