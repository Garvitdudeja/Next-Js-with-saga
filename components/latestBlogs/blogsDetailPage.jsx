import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { BlogInfo } from './blogsData'
import { useRouter } from 'next/router'


const BlogsDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState()
    const blogsCardData = [
        {
            iamge: ".././images/blog-card-3.jpg",
            date: "1 Jan 2023",
            title: "Changing with the Game",
            content: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        }, {
            iamge: ".././images/blog-card-2.jpg",
            date: "1 Jan 2023",
            title: "Out of My Lane Series",
            content: "Mental models are simple expressions of complex processes or relationships.",
        }, {
            iamge: ".././images/blog-card-1.jpg",
            date: "1 Jan 2023",
            title: "The 400 Is a Sprint",
            content: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        },
    ]
    const latestCardData = [
        {
            iamge: ".././images/blog-card-1.jpg",
            date: "1 Jan 2023",
            content: "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
        }, {
            iamge: ".././images/blog-card-2.jpg",
            date: "1 Jan 2023",
            content: "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
        }, {
            iamge: ".././images/blog-card-3.jpg",
            date: "1 Jan 2023",
            content: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        }, {
            iamge: ".././images/blog-card-1.jpg",
            date: "1 Jan 2023",
            content: "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
        },
    ]

    useEffect(()=>{
        if(id){
            setData(BlogInfo(id))
        }
    },[id])
    console.log(id)

    const blogContenthtml = "<p className='masterContent text-start pe-0 pe-lg-3'>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.<br /><br />Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p> <br /><br /><ul className='listStyle'><li>Crisp fresh iconic elegant timeless clean perfume</li><li>Neck straight sharp silhouette and dart detail</li><li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li></ul>"
    return (
        <div className='masterPadding masterTopPadding'>
            <Container>
                <img className="img-fluid w-100 masterImage mb-4 " src=".././images/blog-detail-img.jpg" alt="hero-blog" />
                <Row>
                    <Col xl={8} lg={7}>
                        <div className='d-flex align-items-center contentCardMain mb-3 mb-lg-4'>
                            <Button className='blogCardBtn blogDetailBtn me-4'>Sports</Button>
                            <p className='blogCardDate blogdetailDate m-0'>1 Jan 2023</p>
                        </div>
                        <h2 className='masterHeading'>{data?.title}</h2>
                        <div className='listStyle' dangerouslySetInnerHTML={{ __html: data?.content }} />
                    </Col>
                    <Col xl={4} lg={5}>
                        <h5 className='fs-4 fw-bold mb-3'>The Latest</h5>
                        <div className='gap-3 d-flex flex-column mb-3 mb-lg-0'>
                            {latestCardData.map((item, index) => (
                                <div key={index} className='position-relative'>
                                    <img className='img-fluid latestCardImg' src={item.iamge} alt="blog-card" />
                                    <div className='latestBlogsCard'>
                                        <p className='masterContent text-light fs-6'>
                                            {item.content}
                                        </p>
                                        <p className='blogCardDate text-light'>{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <div className=" mt-4 mt-lg-5 contentCardMain">
                    <h2 className='masterHeading text-center mb-4'>You may also like</h2>
                    <Row xs={1} md={2} lg={3} className='g-4 d-flex justify-content-center'>
                        {blogsCardData.map((item, index) => (
                            <Col className='d-flex justify-content-center' key={index}>
                                <Card className="contentCard">
                                    <img className="mb-3 mb-lg-2 blogCardImg" src={item.iamge} />
                                    <p className='blogCardDate'>{item.date}</p>
                                    <h6 className="blogCardTitle">{item.title}
                                        <img className='blogCardArrow' src='.././images/black-arrow.svg' alt='black-arrow' />
                                    </h6>
                                    <p className="masterContent">
                                        {item.content}
                                    </p>
                                    <Button className='blogCardBtn'>Sports</Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default BlogsDetailPage