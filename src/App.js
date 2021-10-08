import React from 'react';
import Home from './components/Home';
// import Navbar from './Navbar';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';

function App() {


  return (
    
       
    <div className="App">
    {/* <div className="nav"><Navbar></Navbar></div> */}
    <div className="container">
      <div className="section home"><Home></Home></div>
      <div className="section about"><About></About></div>
      <div className="section experience"><Experience></Experience></div>
      <div className="section skills"><Skills></Skills></div>
      <div className="section education"><Education></Education></div>
      <div className="section hobbies"><Hobbies></Hobbies></div>
      <div className="section contact"> <Contact></Contact></div>
    </div>
      

</div>

  );

  // <Switch>
  //         <Route exact path="/">
  //         <Home></Home>
  //         </Route>
  //         <Route path="/about">
  //           <About></About>
  //         </Route>
  //         <Route path="/experience">
  //           <Experience></Experience>
  //         </Route>
  //         <Route path="/education">
  //           <Education></Education>
  //         </Route>
  //         <Route path="/skills">
  //           <Skills></Skills>
  //         </Route>
  //         <Route path="/contact">
  //           <Contact></Contact>
  //         </Route>
  //         <Route path="/hobbies">
  //           <Hobbies></Hobbies>
  //         </Route>
  //       </Switch>
}

export default App;
