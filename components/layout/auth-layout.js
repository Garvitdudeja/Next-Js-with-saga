import React from "react";
import { Col, Row } from "react-bootstrap";

const AuthLayout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div className="login_bg">
        <div className="login_white_bg ">
          <Row>
            <Col lg={6}>
              <div className="item_center mb-4 mb-lg-0">
                <img
                  className="img-fluid p-2 login_page_img"
                  src="./images/login-hero.svg"
                  alt="hero-login"
                />
              </div>
            </Col>
            <Col lg={6} className="itemCenterV mobileScreenCenter">
              {children}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
