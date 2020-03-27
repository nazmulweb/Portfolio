import React from 'react';
import './App.css';
// import { NavBar } from './components/common/navbar'
import NavBar from './components/common/navbar'
import { Intro, About, Skill, Portfolio, WorkingHistory} from './components'

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
      </main>
    </React.Fragment>
  );
}

export default App;
