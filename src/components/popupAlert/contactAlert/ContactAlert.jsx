import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ContactAlert.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ContactAlert = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        className="contact-modal"
      >
        <Modal.Header>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-alert-text">Thank You!</Modal.Body>
        <Modal.Footer>
          <button
            variant="outline-warning"
            className="pop-close-button"
            onClick={props.handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactAlert;
