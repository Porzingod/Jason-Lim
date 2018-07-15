import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.sass'

import About from './About'
import Navigation from './Navigation'
import Projects from './Projects'
import Skills from './Skills'

import ProfilePic from '../images/profile-pic.png'
import Joes1 from '../images/joes1.jpg'
import Joes2 from '../images/joes2.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Switch>
            <Route path="/about" render={(props) => <About profilePic={ProfilePic} background={Joes1}/>} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
