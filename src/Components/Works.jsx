import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { ProjectsData } from '../Data/Projects';
import { Fade, Slide } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

function Works() {
  const [slidesToShow, setSlidesToShow] = useState(3); // Par défaut, 3 éléments par diapositive

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
  };

  // Fonction pour mettre à jour le nombre d'éléments par diapositive en fonction de la largeur de l'écran
  const updateSlidesToShow = () => {
    if (window.innerWidth <= 768) {
      setSlidesToShow(1); // Pour les écrans de largeur <= 768 (mobile), affiche 1 élément par diapositive
    }
    else if (window.innerWidth <= 968) {
      setSlidesToShow(3); // Pour les écrans de largeur <= 768 (mobile), affiche 1 élément par diapositive
    }
    else {
      setSlidesToShow(4); // Pour les écrans de largeur > 768, affiche 3 éléments par diapositive
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


    <Container id='Works' fluid>
      <Slide direction="down" className='d-flex flex-column align-items-center text-light'>
        <Fade cascade className='mt-5'>

          <h2 className='B89 fs-1 mt-5 textlightbrand'>My Works</h2>
          <p>Some Projects Using WEB technologies</p>
        </Fade>
      </Slide>

      <Container className='p-5 rounded' fluid>
        <Slider {...settings}>
          {ProjectsData.map((item, index) => (
            <div className='p-2 text-center' key={index}>
             <NavLink className={'fw-bold BtnCardProject'} to={item.link} target="_blank">Show the Project </NavLink>

              <Card className='text-center bg-dark bg-opacity-25 CardProject'>
                <Card.Img variant='top' src={item.image} className='ProjectImage' />
                <div className='card-header bgBrandDark'>
                  <h3 className='text-truncate fs-5 textlightbrand bgBrandDark p-2'>{item.title}</h3>
                  <p className='text-truncate textlightbrand  p-2'>{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>


    </Container>


  );
}

export default Works;
