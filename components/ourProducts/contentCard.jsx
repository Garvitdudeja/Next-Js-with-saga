import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ContentCard() {
  const contentCardData = [
    {
      icon: "./images/card-icon-1.svg",
      title: "Custom training / exercise database",
      content:
        "Create and maintain a comprehensive exercise database with categorized exercises by type, difficulty, and outcomes.",
    },{
      icon: "./images/card-icon-2.svg",
      title: "Interactive Training Plans",
      content:
        "Assign customized training plans to players. Players can interact with plans by entering data and receiving feedback.",
    },{
      icon: "./images/card-icon-3.svg",
      title: "Game Strategy & Tactics",
      content:
        "Analyze opponents' strengths and weaknesses to develop game strategies and identify successful play patterns.",
    },{
      icon: "./images/card-icon-4.svg",
      title: "Training Load Management",
      content:
        "Balance training intensity and recovery with personalized plans for optimal performance.",
    },{
      icon: "./images/card-icon-5.svg",
      title: "Predictive Analytics",
      content:
        "Predict future player performance and injury risks using machine learning models based on historical data.",
    },
  ]
  return (
    <Row xs={1} md={2} lg={3} className="g-4 item_center mt-2 mt-lg-3 contentCardMain">
      {contentCardData.map((item, index) => (
        <Col key={index}>
          <Card className="contentCard item_center">
            <img className="mb-3 mb-lg-4 max-w-[25px]" src={item.icon} />
            <h6 className="contentCardTitle">{item.title}</h6>
            <p className="masterContent text-center text-[#4F4F4F]">
              {item.content}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ContentCard;
