// About.js

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Me from '../img/me.JPG'
import Webhelp from '../img/webhelp.png'
import Intelcia from '../img/intelcia.png'
import GomyCode from '../img/gmc.png'
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";

import { Fade, Slide } from "react-awesome-reveal";
const About = () => {
  return (


    <div id="About" className='container d-flex flex-column align-items-center  text-light  pt-5'>
      <Slide direction='right'className='text-center' >


        <h2 className='B89 fs-1 textlightbrand align-self-center  shadow-lg'>About me</h2>
        <p className=' align-self-center'>You can find below more information about me, my Stack and my Exp</p>

      </Slide>

      <Container className='d-flex flex-column gap-1  ' >
        <Slide direction='down' className=' align-self-center text-center' >
          <img src={Me} alt="Ma  de profil jolie" className='img-fluid col-lg-4 col-6 rounded rounded-circle bgBrand2 p-2' />
        </Slide>
        <hr />
        <Fade cascade>
          <Row lg={2}>

            <Col className=''>
              <Slide direction='left'>
                <h2 className='textlightbrand'> <AiTwotoneSafetyCertificate /> FULLSTACK Web Developer</h2>
                <br />
                <h5 className='textlightbrand'> Passionate about new technologies and Software Development,
                  I have been self-taught in web development since my time in middle school. My journey has been driven by a continuous desire to learn and explore the ever-evolving field of web development.</h5>

                <h6>Personal Infos :</h6>

                <Row lg={2} xs={1}>
                  <Col>
                    <ul>
                      <li> Birthday:24 October 1994</li>
                      <li>Phone:+212 612 865 681</li>
                      <li>City:Rabat, Morrocco</li>
                      <li>Age: 28</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>

                      <li>Degree: Diploma Level 5 Rncp</li>
                      <li>Email:yelmouss.devt@gmail.com</li>
                      <li>Freelance: Available</li>
                    </ul>


                  </Col>

                  <h5 className='textlightbrand'>  <IoRocketOutline /> Certified in both F/E and B/E technologies. I developed applications and programs that made the work amazing</h5>
                  <h5 className='textlightbrand'> Committed to delivering high-quality and user-friendly solutions for a seamless online experience</h5>
                </Row>
              </Slide>



            </Col>

            <Col>



            <Slide direction='right'>

              <ul>
                <li>
                  <h2 className='textlightbrand'><GrCertificate /> Web Developer</h2>
                  <p> 2020 - 2023 </p>
                  <p>
                    Received a Web Developer diploma from OpenClassrooms between 2020 and 2023. The program involved the development of websites for the Internet and intranets, encompassing tasks ranging from creating simple plain text static pages to building complex web applications, e-business projects, and social networking services.
                  </p>
                </li>
                <li>
                  <h2 className='textlightbrand'> <GrCertificate /> Bachelor in economics & business management</h2>
                  <p>2011 - 2014</p>
                  <p> Completed the Bachelor's program in Science at Science City between 2010 and 2014. The coursework covered a range of scientific disciplines, providing a solid foundation for further academic and professional pursuits.</p>
                </li>
              </ul>
              </Slide>
            </Col>
          </Row>
        </Fade>
      </Container>



      <Container className='text-center'>

        <h2>Experience  </h2>
        <br />
        <div className="hori-timeline " dir="ltr">
          <ul className="list-inline events">
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={Webhelp} alt="Mon  cc 1" className='ExpImg' />
                <div className="event-date bg-dark  fs-bold">
                  2015
                </div>
                <h5 className="font-size-16">
                  Real Time Analyst
                </h5>
                <p>Webhelp Maroc</p>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={Intelcia} alt=" MonImage cc 2" className='ExpImg' />
                <div className="event-date bg-dark fs-bold">
                  2017
                </div>
                <h5 className="font-size-16">
                  Analyst intraday Performer
                </h5>
                <p>Intelcia Maroc</p>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={Intelcia} alt="MonImage cc 3" className='ExpImg' />
                <div className="event-date bg-dark  fs-bold">
                  2020
                </div>
                <h5 className="font-size-16">
                  WorkForce Manager & Developer Fullstack
                </h5>
                <p>Intelcia Maroc</p>
              </div>
            </li>

            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={GomyCode} alt=" MonImage cc 4" className='ExpImg ' />
                <div className="event-date bg-dark  fs-bold">
                  2023
                </div>
                <h5 className="font-size-16">
                  Instructor computer Science
                </h5>
                <p>GoMyCode Maroc</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>


    </div >


  );
};

export default About;
