// Contact.js

import React, { useState } from 'react';
import { Form,  Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Fade, Slide } from 'react-awesome-reveal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerImage from '../img/yass.png';
import { RiMailSendLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedin   } from "react-icons/fa";
const position = [51.505, -0.09];

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
      const response = await axios.post('http://localhost:8000/api/mailing/', formData);
      setResponseMessage(response.data.message); // Assuming the server responds with a 'message' property
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Error sending email. Please check the console for details.');
    } finally {
      setLoading(false); // Set loading back to false after the request is complete
    }
  };

  return (

    <div id="Contact" className='bg-black bg-opacity-25 pt-5'>
      <Slide direction='down' className='d-flex flex-column align-items-center p-2 text-light text-center' >
        <h2 className='B89 fs-1 textlightbrand align-self-center'>Get in touch</h2>
        <p> Feel free to reach out for inquiries, collaboration, or just to say hello </p>
        <div className='container textlightbrand'>

       
          <Row lg={2} xs={1} className='text-start p-2 d-flex align-items-start'>

       
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
                <div class="networks">
                  <div class="netbox">
                    <NavLink className="icon BtnCardProject2 fw-bold fs-3 " data-tip="Network 1" ><CiInstagram /></NavLink>
                    <NavLink className="icon BtnCardProject2 fw-bold fs-3 " data-tip="Network 1" ><FaWhatsapp /></NavLink>
                    <NavLink className="icon BtnCardProject2 fw-bold fs-3 " data-tip="Network 1" ><FaGithub  /></NavLink>
                    <NavLink className="icon BtnCardProject2 fw-bold fs-3 " data-tip="Network 1" ><FaLinkedin /></NavLink>
                   
                  </div>
                </div>
              </div>
            </Col>
            <Col className='fs-5 d-flex flex-column justify-content-end'>
          
           
          <Form onSubmit={handleSubmit} className='  fs-5 text-center'>
        
            <Fade cascade>
              <Form.Group controlId="to">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name="to"
                  placeholder='your@email.me'
                  className='bg-transparent textlightbrand text-light'
                  value={formData.to} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.Label>Subject:</Form.Label>
                <Form.Control type="text" name="subject"
                  placeholder='Interested in Working Together?'
                  className='bg-transparent textlightbrand '
                  value={formData.subject} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="html">
                <Form.Label>Your Message:</Form.Label>
                <Form.Control as="textarea" rows={3}
                  name="html" value={formData.html}
                  placeholder='Project or idea description'
                  className='bg-transparent textlightbrand '
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
          </Row>
       
        </div>
      </Slide>
    </div>

  );
};

export default Contact;
