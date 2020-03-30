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
        <Element name="test1" className="element" >
          <About />
        </Element>
        <Skill />
        <Portfolio />
        <WorkingHistory />
        <Contact />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
