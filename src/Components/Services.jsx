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
                <Container>
                    <Row>
                        <Col md={4}>
                            <Slide direction='left'>
                            <div className="text-center mb-4  p-3 rounded bgWavy shadow-lg">
                            <MdOutlineDesignServices className={'fs-1 textlightbrand'} />
                                <Card.Body>
                                    <Card.Title>Web Design</Card.Title>
                                    <Card.Text>
                                        I create visually appealing and user-friendly designs for websites.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                            </Slide>
                           
                        </Col>
                        <Col md={4}>
                        <Slide direction='down'>
                        <div className="text-center mb-4  p-4 rounded bgWavy  shadow-lg">
                           <MdOutlineSettingsApplications className={'fs-1 textlightbrand'} />
                                <Card.Body>
                                    <Card.Title>Web Development</Card.Title>
                                    <Card.Text>
                                        I develop robust and efficient websites using modern web technologies.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                            </Slide>
                        </Col>
                        <Col md={4}>
                        <Slide direction='right'>
                        <div className="text-center mb-4  p-3 rounded bgWavy  shadow-lg">
                        <MdOutlineSupportAgent  className={'fs-1 textlightbrand'}/>
                                <Card.Body>
                                    <Card.Title>Support & Maintenance</Card.Title>
                                    <Card.Text>
                                        I provide ongoing support and maintenance to ensure your website runs smoothly.
                                    </Card.Text>
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
