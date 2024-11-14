import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogsCard from './blogsCard'
import Link from 'next/link'

const LatestBlogs = () => {
    return (
        <div className='masterPadding'>
            <Container>
                <Row>
                    <Col lg={12} className=''>
                <div className='mb-3 mb-lg-4 d-flex justify-content-between'>
                        <div className='hideOnMobile' />
                        <h2 className='masterHeading mb-0'>Latest Blogs</h2>
                        <Link className='linkLine' href='/blogs'>
                            <p className='blogViewLink'>View all
                                <img className='ms-2 max-w-[15px]' src='./images/blue-arrow.svg' alt='blue-arrow' />
                            </p>
                        </Link>
                </div>
                    </Col>
                    <BlogsCard />
                </Row>
            </Container>
        </div>
    )
}

export default LatestBlogs