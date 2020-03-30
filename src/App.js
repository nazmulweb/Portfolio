import React from 'react';
import './App.css';
import { NavBar, Footer } from './components/common'
import { Intro, About, Skill, Portfolio, WorkingHistory, Contact} from './components'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Intro />
        <About />
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
