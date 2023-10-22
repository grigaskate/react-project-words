import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {About, Home, Game, Error} from '../../pages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import dictionary from '../../data/dictionary.json';
import '../../style/App.scss';

function App() {

  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/game" element={<Game />} /> 
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;