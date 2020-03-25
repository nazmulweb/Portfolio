import React from 'react';
import './App.css';
// import { NavBar } from './components/common/navbar'
import NavBar from './components/common/navbar'
import { Intro, About, Skill, Portfolio} from './components'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Intro />
        <About />
        <Skill />
        <Portfolio />
      </main>
    </React.Fragment>
  );
}

export default App;
