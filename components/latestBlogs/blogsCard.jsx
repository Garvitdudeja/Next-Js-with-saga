import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const BlogsCard = () => {
    const blogsCardData = [
        {
            iamge: "./images/blog-card-3.jpg",
            date: "1 Jan 2023",
            title: "Changing with the Game",
            content: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            id:"1"
        }, {
            id: "2",
            iamge: "./images/blog-card-2.jpg",
            date: "1 Jan 2023",
            title: "Out of My Lane Series",
            content: "Mental models are simple expressions of complex processes or relationships.",
        }, {
            "id": "3",
            iamge: "./images/blog-card-1.jpg",
            date: "1 Jan 2023",
            title: "The 400 Is a Sprint",
            content: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        },
    ]
    return (
        <>
            <div className="  mt-2 mt-lg-3 contentCardMain">
                <Row xs={1} md={2} lg={3} className='g-4 d-flex justify-content-center'>
                    {blogsCardData.map((item, index) => (
                        <Col key={index}>
                            <Card className="contentCard">
                                <img className="mb-3 mb-lg-2 blogCardImg" src={item.iamge} />
                                <p className='blogCardDate'>{item.date}</p>
                                <Link href={"/blogs/"+item.id} className='text-decoration-none'>
                                <h6 className="blogCardTitle">{item.title}
                                    <img className='blogCardArrow' src='./images/black-arrow.svg' alt='black-arrow' />
                                </h6>
                                </Link>
                                <p className="masterContent">
                                    {item.content}
                                </p>
                                <Button className='blogCardBtn'>Sports</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default BlogsCard