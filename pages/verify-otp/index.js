import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import OtpInput from 'react-otp-input';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
  return (
    <div className="text-start login_right_box signup_box">
    <img src='./images/verify-otp.svg' alt='verify-otm-img' title='verify-msg-icon'/>
    <h2 className="login_heading">Verify Email</h2>
    <p className="loginSubHeading mb-3 mb-lg-4">
    Enter the code that we just sent on your
    email address.
    </p>
    {/* <Row> */}
      
      {/* <Col className="" lg={6}> */}
      <div className='login_input otpRowInput mb-3 mb-lg-4'>
      <OtpInput
      className='otpInput '
      value={otp}
      separator={"-"}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
      </div>
      {/* </Col> */}
    {/* </Row> */}
    <button className="login_btn mb-2 mb-lg-3">Verify OTP</button>
    <p className="signup_link">
    Didn’t receive your code? <span>Resend</span>
  </p>
  </div>
  )
}

export default VerifyOtp