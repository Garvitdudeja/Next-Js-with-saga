import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Signup() {
  return (
    <div className="text-start login_right_box signup_box">
      <h2 className="login_heading">Create Account</h2>
      <p className="loginSubHeading mb-3 mb-lg-4 text-center">
        Complete account profile to continue
      </p>
      <Row>
        <Col className="" lg={6}>
          <div className="login_input_position mb-3 mb-lg-4">
            <label className="login_label">First Name</label>
            <img
              className="icon"
              src="./images/Message.svg"
              alt="message-icon"
            />
            <input className="login_input inputError" placeholder="Your First Name" />
          </div>
        </Col>
        <Col className="" lg={6}>
          <div className="login_input_position mb-3 mb-lg-4">
            <label className="login_label">Last Name</label>
            <img
              className="icon"
              src="./images/Message.svg"
              alt="message-icon"
            />
            <input className="login_input" placeholder="Your Last Name" />
          </div>
        </Col>
        <Col className="" lg={6}>
          <div className="login_input_position mb-3 mb-lg-4">
            <label className="login_label">Email</label>
            <img
              className="icon"
              src="./images/Message.svg"
              alt="message-icon"
            />
            <input className="login_input" placeholder="Your Email Address" />
          </div>
        </Col>
        <Col className="" lg={6}>
          <div className="login_input_position mb-3 mb-lg-4">
            <label className="login_label">Date of Birth</label>
            <img
              className="icon"
              src="./images/Message.svg"
              alt="message-icon"
            />
            <input className="login_input" placeholder="DD/MM/YYYY" />
          </div>
        </Col>
        <Col className="" lg={6}>
          <div className="login_input_position mb-3 mb-lg-4">
            <label className="login_label">Password</label>
            <img
              className="icon"
              src="./images/Message.svg"
              alt="message-icon"
            />
            <input className="login_input" placeholder="Enter Password" />
          </div>
        </Col>
        <Col className="" lg={6}>
          <div className="login_input_position mb-3 mb-lg-4">
            <label className="login_label">Confirm Password</label>
            <img
              className="icon"
              src="./images/Message.svg"
              alt="message-icon"
            />
            <input className="login_input" placeholder="Confirm Enter Password" />
          </div>
        </Col>
      </Row>
      <button className="login_btn mb-2 mb-lg-3">Signup</button>
      <p className="signup_link">
      Already have a account? <span>Sign Up</span>
    </p>
    </div>
  );
}
