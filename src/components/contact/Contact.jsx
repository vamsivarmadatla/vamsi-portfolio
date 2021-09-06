import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./Contact.css";
import "./ContactRes.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { db } from "../../firebase";
import ContactAlert from "../popupAlert/contactAlert/ContactAlert";

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const [formValues, setFormValues] = useState("");
  const [contactAlertShow, setContactAlertShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        message: formValues.message,
      })
      .then(() => {
        setLoader(false);
        setContactAlertShow(true);
        setFormValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
        setLoader(false);
        setContactAlertShow(false);
      });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    // const nom = /^[0-9]+$/;

    // if (event.target.name === "phone" && !event.target.value.match(nom)) {
    //   // alert('dddddddddd')
    //   event.target.name = event.target.value.replace(/^[A-Za-z]+$/gi, "");
    //   console.log("formValues.name", value);

    //   setFormValues({
    //     ...formValues,
    //     [name]: value,
    //   });
    // } else

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <Row className="noPadding main-background">
        <Col className="noPadding mt-4">
          <Container>
            <div>
              <h1 className="contact-title">
                GET IN <span>TOUCH</span>
              </h1>
            </div>

            <div className="mt-5">
              <Row className="mt-4 mb-4">
                <Col lg={4} className=" mb-2">
                  <div>
                    <h3 className="">DON'T BE SHY !</h3>
                    <p className="contact-text">
                      Feel free to get in touch with me. I am always open to
                      discussing new projects, creative ideas or opportunities
                      to be part of your visions.
                    </p>
                  </div>
                  <div>
                    <div className="email-section">
                      <div className="email-section-font-icon">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                      </div>
                      <div className="email-contact">
                        <span className="email-contact-name mt-2">MAIL ME</span>
                        <p className="email-contact-text">
                          dvamsivarma619@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="email-section">
                      <div className="call-section-font-icon">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} />
                      </div>
                      <div className="email-contact">
                        <span className="email-contact-name mt-2">CALL ME</span>
                        <p className="email-contact-text">+91 7013035132</p>
                      </div>
                    </div>
                  </div>

                  <div className="social-icon-row mt-4 mb-4">
                    <span className="social-item">
                      <a
                        className="social-icon"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/vamsivarma.d"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </span>
                    <span className="social-item">
                      <a
                        className="social-icon"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/vamsivarma_datla_/"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </span>
                    <span className="social-item">
                      <a
                        className="social-icon"
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/vamsivarmadatla"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </span>
                  </div>
                </Col>

                <Col lg={8} className="mb-2">
                  <Form
                    className="form"
                    onSubmit={handleSubmit}
                    onChange={onChange}
                  >
                    <Row className="mb-3">
                      <Col lg={4} sm={12}>
                        <Form.Group as={Col} controlId="formGridName">
                          <Form.Control
                            className="contact-form"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="YOUR NAME"
                            value={formValues.name}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} sm={12}>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Control
                            className="contact-form"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="YOUR EMAIL"
                            value={formValues.email}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} sm={12}>
                        <Form.Group as={Col} controlId="formGridSubject">
                          <Form.Control
                            className="contact-form"
                            type="phone"
                            name="phone"
                            id="phone"
                            placeholder="YOUR PHONE"
                            value={formValues.phone}
                            pattern="[0-9]*"
                            inputmode="tel"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Control
                          as="textarea"
                          className="contact-form"
                          type="text"
                          name="message"
                          id="message"
                          placeholder="YOUR MESSAGE"
                          rows="5"
                          value={formValues.message}
                        />
                      </Form.Group>
                    </Row>
                    <div className="downloadcv-section">
                      <Button
                        variant="outline-warning"
                        className="download-cv"
                        type="submit"
                      >
                        SEND MESSAGE
                        <div className="downloadcv-icon">
                          <FontAwesomeIcon icon={faTelegramPlane} />
                        </div>
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
      <ContactAlert
        show={contactAlertShow}
        handleClose={() => setContactAlertShow(false)}
      />
    </>
  );
};

export default Contact;
