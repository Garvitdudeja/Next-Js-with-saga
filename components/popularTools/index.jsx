import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardSwiper from "./cardSwiper";

const PopularTools = () => {
  return (
    <div className="shadowBg position-relative">
      <Container>
        <Row className="py-3 py-lg-5">
          <Col lg={6} xl={5}>
            <div className="my-3 my-lg-5 itemcenter768 w-100 flex-column">
              <h2 className="masterHeading">POPULAR TOOLS</h2>
              <p className="masterContent max-w-[432px]">
                From Data to Decisions: Tools to Explore and Experiment.
              </p>
              <img src="./images/sport-img.svg" alt="sport-image" />
            </div>
          </Col>
          <Col lg={6} xl={7} className="overflow_right hideOnlg">
            <CardSwiper />
          </Col>
          <Col lg={6} xl={7} className="hiddenOnXl mb-4 mb-md-5 owerflow_full">
            <CardSwiper />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PopularTools;
