import ErrorMessage from "@/components/common/ErrorMessage";
import Spinner from "@/components/common/Spinner";
import { useAuthSelector } from "@/redux/selector/auth";
import { useWebSelector } from "@/redux/selector/web";
import { updateUser } from "@/redux/slices/web";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const GoogleSignup = () => {
  const authSelector = useAuthSelector()
  const webSelector = useWebSelector()
  const router = useRouter()
  const userDetails = authSelector?.userInfo?.data?.data?.userDetails
  const dispatch = useDispatch()
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      first_name: userDetails?.first_name,
      last_name: userDetails?.last_name,
      dob: userDetails?.dob,
    }, validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      dob: Yup.date().required("Date of birth is required"),

    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(updateUser({...values, cb(res){
        router.push('/dashboard')
      }}))
    },
  })
  return (
    <div className="text-start login_right_box signup_box">
      <h2 className="login_heading">Create Account</h2>
      <p className="loginSubHeading mb-3 mb-lg-4">
        Complete account profile to continue
      </p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="" lg={6}>
            <div className="login_input_position mb-3 mb-lg-4">
              <label className="login_label">First Name</label>
              <img
                className="icon"
                src="./images/Profile.svg"
                alt="message-icon"
              />
              <input className="login_input" name="first_name" onChange={handleChange} value={values.first_name} placeholder="Your First Name" />
              {touched.first_name && errors.first_name && (
                <ErrorMessage msg={errors.first_name} />
              )}
            </div>
          </Col>
          <Col className="" lg={6}>
            <div className="login_input_position mb-3 mb-lg-4">
              <label className="login_label">Last Name</label>
              <img
                className="icon"
                src="./images/Profile.svg"
                alt="message-icon"
              />
              <input className="login_input" name="last_name" onChange={handleChange} value={values.last_name} placeholder="Your Last Name" />
              {touched.last_name && errors.last_name && (
                <ErrorMessage msg={errors.last_name} />
              )}
            </div>
          </Col>
          <Col className="" lg={12}>
            <div className="login_input_position mb-3 mb-lg-4">
              <label className="login_label">Date Of Birth</label>
              <img
                className="icon"
                src="./images/calendar.svg"
                alt="message-icon"
              />
              <input className="login_input" type="date" name="dob" onChange={handleChange} value={values.dob} placeholder="DD/MM/YYYY" />
              {touched.dob && errors.dob && (
                <ErrorMessage msg={errors.dob} />
              )}
            </div>
          </Col>
        </Row>
      <button className="login_btn mb-2 mb-lg-3" type="submit">{webSelector.loading ? <Spinner/> : "Complete"}</button>
      </Form>
    </div>
  );
};

export default GoogleSignup;
