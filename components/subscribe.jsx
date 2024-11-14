import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { validationPatterns } from "./validationPattrens";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./common/ErrorMessage";
import { userSubscribe } from "@/redux/slices/web";
import { useDispatch } from "react-redux";
import { useWebSelector } from "@/redux/selector/web";
import Spinner from "./common/Spinner";
import ThankuCard from "./thankuCard";

const Subscribe = () => {
  const dispatch = useDispatch();
  const webSelector = useWebSelector()
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      mail: false
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required("Please enter phone or email")
        .matches(validationPatterns.email, "Invalid email"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      delete values.mail
      dispatch(
        userSubscribe({
          ...values,
          cb(res) {
            console.log(res);
            resetForm()
            handleShow()
          },
        })
      );
    },
  });

  // Thank you Message
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="subscribeBg">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={6}>
              <img src="./images/subscribe.svg" alt="subscribe" />
            </Col>
            <Col lg={6}>
              <div className="  signup_box py-4 py-lg-5">
                <h2 className="subscribeHeading">
                  Subscribe to our newsletter
                </h2>
                <p className="loginSubHeading font18 mb-3 mb-lg-4">
                  to be updated with latest trends and products
                </p>
                <Row>
                  <Col className="mb-2 mt-2 mt-lg-0 mb-lg-0" lg={6}>
                    <div className="login_input_position mb-3 mb-lg-4">
                      <label className="login_label scribLabel">
                        First Name
                      </label>
                      <img
                        className="icon"
                        src="./images/Profile.svg"
                        alt="message-icon"
                      />
                      <input
                        className="login_input removeBg"
                        placeholder="Your First Name"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                      />
                      {touched.first_name && errors.first_name && (
                        <ErrorMessage msg={errors.first_name} />
                      )}
                    </div>
                  </Col>
                  <Col className="mb-2 mb-lg-0" lg={6}>
                    <div className="login_input_position mb-3 mb-lg-4">
                      <label className="login_label scribLabel">
                        Last Name
                      </label>
                      <img
                        className="icon"
                        src="./images/Profile.svg"
                        alt="message-icon"
                      />

                      <input
                        className="login_input removeBg"
                        placeholder="Your Last Name"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                      />
                      {touched.last_name && errors.last_name && (
                        <ErrorMessage msg={errors.last_name} />
                      )}
                    </div>
                  </Col>
                  <Col className="mb-2 mb-lg-0" lg={12}>
                    <div className="login_input_position mb-2 mb-lg-3">
                      <label className="login_label scribLabel">Email</label>
                      <img
                        className="icon"
                        src="./images/Message.svg"
                        alt="message-icon"
                      />
                      <input
                        className="login_input removeBg"
                        type="email"
                        placeholder="Your Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {touched.email && errors.email && <ErrorMessage msg={errors.email} />}
                    </div>
                  </Col>
                </Row>
                <div className="checkbox-container d-flex align-items-center mb-3 mb-lg-4 ">
                  <input id="checkbox1" className="mr-2" type="checkbox" name="mail" checked={values.mail} onChange={handleChange}  />
                  <label className='me-2' for="checkbox1"></label><span className='masterContent text-start'>Please mark checkbox to get email alerts</span>
                </div>
                <button className="login_btn mb-2 mb-lg-3">{webSelector?.loading ? <Spinner/>: "Subscribe"}</button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <ThankuCard handleShow={handleShow} handleClose={handleClose} show={show} />
      
    </div>
  );
};

export default Subscribe;
