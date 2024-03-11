import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Font from 'react-font';
import Services from './Components/Services';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-NSE8GHV1SG');
  }, []);

  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });


  window.addEventListener('blur', () => {
    document.title = "Come Back To Portfolio"
  });

  window.addEventListener('focus', () => {
    document.title = "Yelmouss"
  });

  return (
    <>
      <Font family='Genos'>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <About />
                  <Works />
                  <Contact />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </Font>
    </>
  );
};

export default App;
