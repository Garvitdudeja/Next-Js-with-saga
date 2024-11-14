import React, { useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ContentCard from "./contentCard";

const OurProducts = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabContent = [
    <ContentCard />,
    <div className="item_center pt-5"><img className="img-fluid " src="./images/tab-2-img.svg" alt="tab data" /></div>,
    <div className="item_center pt-5"><img className="img-fluid " src="./images/tab-2-img.svg" alt="tab data" /></div>,
  ];
  const boxCardData = [
    {
      title: "SportsDS",
      image: "./images/card-img.svg"

    },
    {
      title: "RetailDS",
      image: ""

    },
    {
      title: "OperationsDS",
      image: ""
    },
  ]
  return (
    <div className="masterPadding bottomPaddingNone" id="our_product">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <h2 className="masterHeading">Our products</h2>
              <p className="masterContent mb-4">
                Lorem ipsum is common placeholder text used to demonstrate the
                graphic elements of a document or visual presentation.
              </p>
            </div>
            <div className="gap-2 gap-sm-3 d-flex justify-content-between boxCardmain mt-2 mt-lg-3">
              {boxCardData.map((item, index) => (
                <Card key={index} onClick={() => handleTabClick(index)} className={activeTab === index ? "w-100 activeCard boxCard" : "w-100 boxCard"}>
                  <div className="d-flex justify-content-between ImgSet620">
                    {item.image ? <img
                      className=" img-fluid BoxcardImg hideImg620Plus"
                      src={item.image}
                      alt="card-image"
                    /> : ""}
                    {/* <img
                        className=" img-fluid BoxcardImg hideImg620Plus"
                        src={item.image}
                        alt="card-image"
                      /> */}
                    <h5 className="subHeading tabTitle">{item.title}</h5>
                    {item.image ? <img
                      className="ms-2 img-fluid BoxcardImg hideImg620minus"
                      src={item.image}
                      alt="card-image"
                    /> : ""}

                  </div>
                  <div className="boxArrow"></div>
                </Card>
              ))}
            </div>
            <div className="mb-4">
              {tabContent[activeTab]}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProducts;
