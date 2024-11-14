import { Button, Col, Container, Row } from "react-bootstrap";
import ThankuCard from "../thankuCard";
import { useState } from "react";

const Discover = () => {

  return (
    <>
      <div className="homePageBg masterPadding">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="homeContent mb-4 mb-lg-0 p-2 p-lg-3">
                <h1 className="homePageHeading">
                  From Data to <br /> <span>Decisions</span>
                </h1>
                <p className="mb-3 mb-lg-4">
                  Experience the next level of data-driven decision-making. Connect
                  seamlessly, analyze comprehensively, and decide confidently.
                  Empower yourself to make smarter, faster decisions with insights
                  that matter.
                </p>
                <Button className="masterBtn mb-2">Start Your Journey Today</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="item_center p-2 p-lg-3">
                <img className="img-fluid heroImg" src="./images/home-hero.svg" alt="hero-bg" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Discover;
