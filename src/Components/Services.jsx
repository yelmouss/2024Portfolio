import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineDesignServices, MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";

function Services() {
    return (
        <div id='Services' className='container'>
            <Container className='d-flex flex-column align-items-center text-light pt-5'>
                <h2 className='B89 fs-1 textlightbrand align-self-center  shadow-lg'>My services</h2>
                <p className='align-self-center'>What I Do</p>
                <Container className='fs-1 text-center'>
                    <Row lg={3} xs={1} md={3}>
                        <Col>
                            <Slide direction='left'>

                            <div className="text-center mb-4  p-1 rounded bgWavy shadow-lg">
                            <MdOutlineDesignServices className={'fs-1 textlightbrand'} />

                                <Card.Body>
                                    <Card.Title>Web Design</Card.Title>
                                    {/* <Card.Text>
                                        I create visually appealing and user-friendly designs for websites.
                                    </Card.Text> */}
                                </Card.Body>
                            </div>
                            </Slide>
                           
                        </Col>
                        <Col >
                        <Slide direction='down'>
                        <div className="text-center mb-4  p-1 rounded bgWavy  shadow-lg">
                           <MdOutlineSettingsApplications className={'fs-1 textlightbrand'} />
                                <Card.Body>
                                    <Card.Title>Web Development</Card.Title>
                                    {/* <Card.Text>
                                        I develop robust and efficient websites using modern web technologies.
                                    </Card.Text> */}
                                </Card.Body>
                            </div>
                            </Slide>
                        </Col>
                        <Col>
                        <Slide direction='up'>
                        <div className="text-center mb-4  p-1 rounded bgWavy  shadow-lg">
                        <MdOutlineSupportAgent  className={'fs-1 textlightbrand'}/>
                                <Card.Body>
                                    <Card.Title>Support & Maintenance</Card.Title>
                                    {/* <Card.Text>
                                        I provide ongoing support and maintenance to ensure your website runs smoothly.
                                    </Card.Text> */}
                                </Card.Body>
                            </div>
                            </Slide>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Services;
