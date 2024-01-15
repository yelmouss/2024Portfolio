// Home.js
import { Col, Container, Row } from 'react-bootstrap';
import Typed from 'react-typed';
import { TechData } from '../Data/Tech';
import { Fade, Slide } from "react-awesome-reveal";
import CustomParticles from './CustomParticles';

const Home = () => {

  return (
    <>

      <Container id="Home" fluid className='text-light pt-5'>
        <CustomParticles />

        <Fade className='container d-flex flex-column align-items-start p-2 justify-content-start' cascade>
          <Slide direction="up" >
            <h2 className='B89 fs-1  align-self-center textlightbrand  shadow-lg'>Welcome to my Portfolio</h2>
          </Slide>
          <Slide direction="right" >
            <Typed
              strings={[`<h2 className='fs-1'>Hey my name is </h2>
            <h1 className='fst-italic B89 '> Yassine ELMOUSS </h1>  
          
            `]}
              typeSpeed={50}
              showCursor={false}
              className=' fst-italic fs-1  text-start'
            />

            <h2> I build things for the WEB</h2>
            <Typed
              strings={[`
              <h3>
             
              Experienced full-stack web developer specializing in creating robust and scalable web applications. <br />
              Proficient in a variety of technologies including front-end frameworks, back-end languages, and databases.
              
              </h3>
             
            `]}
              typeSpeed={20}
              showCursor={false}
              className=' fs-1 text-start textlightbrand'
            />

          </Slide>
        </Fade>
        <Slide direction="left" >
          <Container>
            <Row className='p-3 d-flex flex-column' lg={2} xs={1}>
              <Col className='text-end  fst-italic'>
                <h4>"I got the experience and
                  Here is my toolbelt for success."</h4>

              </Col>
              <Col>
                <Fade Hinge>
                  <Row className='p-2'>

                    {TechData.map((item, i) => (
                      <Col key={i} lg={1} xs={2} >
                        <img
                          className="rounded  bg-light rotating img mb-2 p-2 bouncy"
                          width={50}
                          height={50}
                          alt="ProjectImage"
                          src={item.image}
                        />
                      </Col>
                    ))}


                  </Row>
                </Fade>
              </Col>



            </Row>
          </Container>
        </Slide>




      </Container>
    </>
  );
};

export default Home;
