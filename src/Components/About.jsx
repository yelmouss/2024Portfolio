// About.js
import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Me from '../img/me.JPG'
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import Slider from 'react-slick';
import { Fade, Slide } from 'react-awesome-reveal';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import { Exp } from '../Data/Exp';
import { Certifs } from '../Data/Certificates';
import { NavLink } from 'react-router-dom';
const About = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Par défaut, 3 éléments par diapositive
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
  };
  // Fonction pour mettre à jour le nombre d'éléments par diapositive en fonction de la largeur de l'écran
  const updateSlidesToShow = () => {
    if (window.innerWidth <= 768) {
      setSlidesToShow(2); // Pour les écrans de largeur <= 768 (mobile), affiche 1 élément par diapositive
    }
    else if (window.innerWidth <= 968) {
      setSlidesToShow(3); // Pour les écrans de largeur <= 768 (mobile), affiche 1 élément par diapositive
    }
    else {
      setSlidesToShow(3); // Pour les écrans de largeur > 768, affiche 3 éléments par diapositive
    }
  };
  // Utilisation de useEffect pour mettre à jour le nombre d'éléments par diapositive lors du chargement initial et lors du redimensionnement de la fenêtre
  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    // Nettoie l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);
  return (
    <div id="About" className='container d-flex flex-column align-items-center  text-light  pt-5'>
      <Slide direction='up' className='text-center' >
        <h2 className='B89 fs-1 textlightbrand align-self-center  shadow-lg'>About me</h2>
        <p className=' align-self-center'>You can find below more information about me, my Stack and my Exp</p>
      </Slide>
      <Container className='d-flex flex-column gap-1  ' >
        <Slide direction='down' className=' align-self-center text-center' >
          <img src={Me} alt="Ma  de profil jolie" className='img-fluid col-lg-4 col-6 rounded rounded-circle bgBrand2 p-2 bouncy' />
        </Slide>
        <hr />
        <Fade cascade>
          <Row lg={2}>
            <Col className=''>
              <Slide direction='left'>
                <h2 className='textlightbrand'> <AiTwotoneSafetyCertificate /> FULLSTACK Web Developer</h2>
                <h5 className='textlightbrand'> Passionate about new technologies and Software Development,
                  I have been self-taught in web development since my time in middle school. My journey has been
                  driven by a continuous desire to learn and explore the ever-evolving field of web development.
                </h5>
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
                      <li>Email: yelmouss.devt@gmail.com</li>
                      <li>Freelance: Available</li>
                    </ul>
                  </Col>
                </Row>
                <h2 className='textlightbrand'><GrCertificate /> Web Developer</h2>
                <p> 2020 - 2023 </p>
                <p>
                  Received a Web Developer diploma from OpenClassrooms between 2020 and 2023.
                  The program involved the development of websites for the Internet and intranets,
                  encompassing tasks ranging from creating simple plain text static pages to building complex web applications.
                </p>
                <br />
                <h2 className='textlightbrand'> <GrCertificate /> Bachelor in economics & business management</h2>
                <p>2011 - 2014</p>
                <p> Completed the Bachelor's program in Science at Science City between 2010 and 2014. The coursework covered a range of scientific disciplines, providing a solid foundation for further academic and professional pursuits.</p>
                <h5 className='textlightbrand'>  <IoRocketOutline /> Certified in both F/E and B/E technologies. I developed applications and programs that made the work amazing</h5>
              </Slide>
            </Col>
            <Col>
              <Slide direction='left'>
                <Container>
                  <h2>Experience  </h2>
                  <br />
                  <Timeline position="alternate">
                    {Exp.map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.light"
                        >
                          {item.anne}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector />
                          <img src={item.ImageUrl} alt="icon" className='ExpImg rounded rounded-circle bg-light bg-opacity-75 p-1' />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Typography variant="h6" component="span">
                            {item.title}
                          </Typography>
                          <Typography>{item.societe} </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                  {/* <h5 className='textlightbrand'> Committed to delivering high-quality and user-friendly solutions for a seamless online experience</h5> */}
                  <br />
                  <hr />
                  <h2>Certificates  </h2>
                  <Slider {...settings}>
                    {
                      Certifs.map((item, index) => (
                        <Card className="text-center mb-4  p-3 rounded bg-transparent text-light p-0 " key={index}>
                          <NavLink target='_blank' to={item.LinkCert}>
                            <Card.Img variant="top" src={item.ImageUrl} />
                          </NavLink>
                          <Card.Body>
                            <Card.Title className='text-truncate'>{item.title}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      ))
                    }
                  </Slider>
                </Container>
              </Slide>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div >
  );
};
export default About;
