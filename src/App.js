import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import {projects} from './data/Projects'
function App() {
  
  
  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Project/>
    <Contact/>
    </>
  );
}

export default App;
