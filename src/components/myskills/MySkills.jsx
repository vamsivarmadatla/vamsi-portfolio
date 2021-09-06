import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./MySkills.css";

const MySkills = () => {
  const Styles = {
    textColor: "white",
    pathColor: "gold",
    trailColor: "#252525",
  };
  return (
    <Row className="noPadding myskills-row">
      <Col className="noPadding">
        <Container>
          <div className="myskills-title mt-4">
            MY <span> SKILLS</span>
          </div>

          <Row className=" mt-4 mb-4">
            <Col>
              <div className="progress-card ">
                <CircularProgressbar
                  value="80"
                  text="80%"
                  styles={buildStyles(Styles)}
                  className="progress-circle mb-2"
                />
                <p className="progress-text">HTML</p>
              </div>
            </Col>
            <Col>
              <div className="progress-card ">
                <CircularProgressbar
                  value="80"
                  text="80%"
                  styles={buildStyles(Styles)}
                  className="progress-circle mb-2"
                />
                <p className="progress-text">CSS</p>
              </div>
            </Col>
            <Col>
              <div className="progress-card ">
                <CircularProgressbar
                  value="80"
                  text="80%"
                  styles={buildStyles(Styles)}
                  className="progress-circle mb-2"
                />
                <p className="progress-text">SCSS</p>
              </div>
            </Col>
          </Row>
          <Row className=" mt-4 mb-4">
            <Col>
              <div className="progress-card ">
                <CircularProgressbar
                  value="70"
                  text="70%"
                  styles={buildStyles(Styles)}
                  className="progress-circle mb-2"
                />
                <p className="progress-text">BOOTSTRAP</p>
              </div>
            </Col>
            <Col>
              <div className="progress-card ">
                <CircularProgressbar
                  value="60"
                  text="60%"
                  styles={buildStyles(Styles)}
                  className="progress-circle mb-2"
                />
                <p className="progress-text">JAVASCRIPT</p>
              </div>
            </Col>
            <Col>
              <div className="progress-card ">
                <CircularProgressbar
                  value="60"
                  text="60%"
                  styles={buildStyles(Styles)}
                  className="progress-circle mb-2"
                />
                <p className="progress-text">REACT</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default MySkills;
