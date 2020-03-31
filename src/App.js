import React from 'react';
import './App.css';
import { NavBar, Footer } from './components/common'
import { Intro, About, Skill, Portfolio, WorkingHistory, Contact} from './components'
import { Element } from 'react-scroll'


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Intro />
        <Element name="about" className="element" >
          <About />
        </Element>
        <Element name="skill" className="element" >
          <Skill />
        </Element>
        <Element name="portfolio" className="element" >
          <Portfolio />
        </Element>
        <WorkingHistory />
        <Element name="contact" className="element" >
          <Contact />
        </Element>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
