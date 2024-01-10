// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Font from 'react-font';

const App = () => {

  const [dark, updateDark] = useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  React.useEffect(() => {
    if (ModeDark) {
      updateDark(ModeDark);

    }
  }, [ModeDark]);
  return (
    <>
     <Font family='Genos'>
     <Router>

<Header dark={dark} updateDark={updateDark} />
<Routes>
  <Route
    path="/"
    element={
      <>
        <Home />
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
