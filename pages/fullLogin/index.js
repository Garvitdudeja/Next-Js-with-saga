import React from 'react'

export default function Login() {
  return (
    <div className="text-start login_right_box item_center">
    <h2 className="login_heading">Sign in to your Account</h2>
    <p className='loginSubHeading'>Enter your login details below.</p>
    <div className="login_input_position item_center mb-3 mb-lg-4">
      <label className="login_label">Email</label>
      <img
        className="icon"
        src="./images/Message.svg"
        alt="message-icon"
      />
      <input
        className="login_input"
        placeholder="Enter email Address"
      />
    </div>
    <div className="login_input_position mb-1 mb-lg-2">
      <label className="login_label">Password</label>
      <img
        className="icon"
        src="./images/Message.svg"
        alt="message-icon"
      />
      <input
        className="login_input"
        placeholder="Enter email Address"
      />
    </div>
    <p className="forgot_link ">Forgot Password ?</p>
    <button className="login_btn mb-2 mb-lg-3">Login</button>
    <p className="signup_link">
      Don’t have a account? <span>Sign Up</span>
    </p>
    <p className="or_text">or</p>
    <button className="google_btn item_center">
      <img
        className="me-2 mb-1"
        src="./images/google.svg"
        alt="google-icon"
      />
      LOGIN WITH GOOGLE
    </button>
  </div>
  )
}
