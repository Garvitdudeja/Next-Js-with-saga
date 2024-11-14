import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const BlogsPage = () => {
    const blogsCardData = [
        {
            iamge: "./images/blog-card-2.jpg",
            date: "1 Jan 2023",
            title: "Changing with the Game",
            content: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        }, {
            iamge: "./images/blog-card-3.jpg",
            date: "1 Jan 2023",
            title: "Out of My Lane Series",
            content: "Mental models are simple expressions of complex processes or relationships.",
        }, {
            iamge: "./images/blog-card-1.jpg",
            date: "1 Jan 2023",
            title: "The 400 Is a Sprint",
            content: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        },{
            iamge: "./images/blog-card-3.jpg",
            date: "1 Jan 2023",
            title: "Changing with the Game",
            content: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        }, {
            iamge: "./images/blog-card-2.jpg",
            date: "1 Jan 2023",
            title: "Out of My Lane Series",
            content: "Mental models are simple expressions of complex processes or relationships.",
        }, {
            iamge: "./images/blog-card-1.jpg",
            date: "1 Jan 2023",
            title: "The 400 Is a Sprint",
            content: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        },{
            iamge: "./images/blog-card-3.jpg",
            date: "1 Jan 2023",
            title: "Changing with the Game",
            content: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        }, {
            iamge: "./images/blog-card-2.jpg",
            date: "1 Jan 2023",
            title: "Out of My Lane Series",
            content: "Mental models are simple expressions of complex processes or relationships.",
        },
    ]
    return (
        <div className='masterPadding masterTopPadding'>
            <Container>
                <h2 className='masterHeading'>Featured Blog</h2>
                <Row xs={1} md={1} lg={1} className="g-4 d-flex justify-content-center mt-2 mt-lg-3 contentCardMain">
                    {blogsCardData.slice(0,1).map((item, index) => (
                        <Col key={index}>
                            <Card className="contentCard noMaxWidth">
                                <img className="mb-3 mb-lg-4 blogCardImg noMaxWidth noMaxHeight heightXl" src={item.iamge} />
                                <p className='blogCardDate'>{item.date}</p>
                                <Link href={"/blogdetails"} className='text-decoration-none'>
                                <h6 className="blogCardTitle">{item.title}
                                    <img className='blogCardArrow' src='./images/black-arrow.svg' alt='black-arrow' />
                                </h6>
                                </Link>
                                <p className="masterContent text-start">
                                    {item.content}
                                </p>
                                <Button className='blogCardBtn mt-2 mt-lg-3'>Sports</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <h2 className='masterHeading mt-5 mb-0'>All Blogs</h2>
                <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center mt-0 mt-md-2 mt-lg-3 contentCardMain">
                    {blogsCardData.slice(2).map((item, index) => (
                        <Col key={index}>
                            <Card className="contentCard">
                                <img className="mb-3 mb-lg-2 blogCardImg" src={item.iamge} />
                                <p className='blogCardDate'>{item.date}</p>
                                <Link href={"/blogdetails"} className='text-decoration-none'>
                                <h6 className="blogCardTitle">{item.title}
                                    <img className='blogCardArrow' src='./images/black-arrow.svg' alt='black-arrow' />
                                </h6>
                                </Link>
                                <p className="masterContent text-start">
                                    {item.content}
                                </p>
                                <Button className='blogCardBtn'>Sports</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default BlogsPage