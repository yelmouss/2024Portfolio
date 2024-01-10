import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyImage from '../img/Geek.png';
import Font from 'react-font';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

const Header = ({ dark, updateDark }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isFullscreen] = useState(false);
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      document.title = `Yelmouss - ${sectionId}`;
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleFullscreenChange = () => {
    setActiveSection(''); // Clear active section on fullscreen change
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ['Home', 'About', 'Works', 'Contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className="bg-opacity-75"
      sticky="top"
      bg={`${dark ? 'light' : 'dark'}`}
      variant={`${dark ? 'light' : 'dark'}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <Font family="Satisfy">
            <img
              src={MyImage}
              alt="Geek"
              width="50"
              height="50"
              className="d-inline-block align-end bgBrandLight rounded-circle p-1 imgGeek"
            />

            {" yelmouss".split("").map((letter, index) => {
              return (
                <span key={index} className="text-fun-pink textlightbrand fs-1 ">
                  {letter}
                </span>
              );
            })}
          </Font>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"> Portfolio </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end"></Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#Home" onClick={() => handleScroll('Home')} className={activeSection === 'Home' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link href="#About" onClick={() => handleScroll('About')} className={activeSection === 'About' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link href="#Works" onClick={() => handleScroll('Works')} className={activeSection === 'Works' ? 'active' : ''}>
              Works
            </Nav.Link>
            <Nav.Link href="#Contact" onClick={() => handleScroll('Contact')} className={activeSection === 'Contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Nav.Link onClick={toggleFullscreen}>
              {isFullscreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen /> }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
