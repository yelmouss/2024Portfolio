// Contact.js

import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Fade, Slide } from 'react-awesome-reveal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerImage from '../img/yass.png';
import { RiMailSendLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
const googleColor = '#4285F4'; // Couleur de Google
const githubColor = '#333'; // Couleur de GitHub
const instagramColor = '#E4405F'; // Couleur d'Instagram
const whatsappColor = '#25D366'; // Couleur de WhatsApp
const linkedinColor = '#0077B5'; // Couleur de LinkedIn
const position = [34.0042117, -6.8586604];

const Contact = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    html: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true during the request
      const response = await axios.post('https://node-mailer-yelmouss.vercel.app/api/mailing/', formData);
      setResponseMessage(response.data.message); // Assuming the server responds with a 'message' property
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Error sending email. Please check the console for details.');
    } finally {
      setLoading(false);
      // Set loading back to false after the request is complete
    }
  };

  return (

    <div id="Contact" className='pt-5'>
      <Slide direction='down' className='d-flex flex-column align-items-center p-2 text-light text-center' >
        <h2 className='B89 fs-1 textlightbrand align-self-center  shadow-lg'>Get in touch</h2>
        <p> Feel free to reach out for inquiries, collaboration, or just to say hello </p>
        <div className='container textlightbrand'>


          <Row lg={2} xs={1} className='text-start p-2 d-flex align-items-start'>


          
            <Col className='fs-5 d-flex flex-column justify-content-end  rounded '>


              <Form onSubmit={handleSubmit} className='  fs-5 text-center'>

                <Fade cascade>
                  <Form.Group controlId="to">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="to"
                      placeholder='your@email.me'
                      className='bg-light bg-opacity-50'
                      value={formData.to} onChange={handleInputChange} required />
                  </Form.Group>
                  <Form.Group controlId="subject">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control type="text" name="subject"
                      placeholder='Interested in Working Together?'
                      className='bg-light bg-opacity-50'
                      value={formData.subject} onChange={handleInputChange} required />
                  </Form.Group>
                  <Form.Group controlId="html">
                    <Form.Label>Your Message:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                      name="html" value={formData.html}
                      placeholder='Project or idea description'
                      className='bg-light bg-opacity-50'
                      onChange={handleInputChange} required />
                  </Form.Group>
                </Fade>
                <hr />
                <button type="submit" className=' BtnCardProject2 fw-bold textlightbrand' disabled={loading}>
                  {loading ? 'Sending...' : <>Send Email <RiMailSendLine /></>}
                </button>

              </Form>
              <p>{responseMessage}</p>
            </Col>
            <Col className='fs-5 d-flex flex-column justify-content-end'>
              <Fade cascade>

                <h5>My location </h5>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '242px' }} className='rounded'>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}   >
                    <Popup>
                      <img src={MarkerImage} alt="Marker" style={{ maxWidth: '100%' }} />
                    </Popup>
                  </Marker>
                </MapContainer>
              </Fade>
              <hr />
              <div className="social-links">
                <div className="networks">
                  <div className="netbox">

                    <NavLink
                      to={'https://www.google.com/maps/place/Yelmouss/@34.0042117,-6.8586604,17z/data=!3m1!4b1!4m6!3m5!1s0xda76dbbbc4493b7:0x646abb81a920494f!8m2!3d34.0042073!4d-6.8560801!16s%2Fg%2F11s4g9j0ld?entry=ttu'}
                      target='_blank'
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="Network 1"
                      style={{ color: googleColor }}
                    ><AiOutlineGoogle  /></NavLink>

                    <NavLink
                      to={'https://github.com/yelmouss/'}
                      target='_blank'
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="Network 1"
                      style={{ color: githubColor }}
                    ><FaGithub /></NavLink>

                    <NavLink
                      to={'https://www.instagram.com/yelmouss/'}
                      target='_blank'
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="Network 1"
                      style={{ color: instagramColor }}
                    ><FaInstagram  /></NavLink>

                    <NavLink
                      className="icon BtnCardProject2 fw-bold fs-3"
                      to={'https://wa.me/00212612865681?text=Interested%20in%20collaborating%20%20?'}
                      target='_blank'
                      data-tip="Network 1"
                      style={{ color: whatsappColor }}
                    ><FaWhatsapp /></NavLink>

                    <NavLink
                      to={'https://ma.linkedin.com/in/yelmouss'}
                      target='_blank'
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="Network 1"
                      style={{ color: linkedinColor }}
                    ><FaLinkedin /></NavLink>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </Slide>
    </div>

  );
};

export default Contact;
