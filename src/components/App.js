import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About'
import Navigation from './Navigation'
import Projects from './Projects'
import Skills from './Skills'

import ProfilePic from '../images/profile-pic.png'
import Joes1 from '../images/joes1.jpg'
import Joes2 from '../images/joes2.jpg'
import { projects } from '../projects.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <About profilePic={ProfilePic} background={Joes1}/>} />
            <Route path="/projects" render={(props) => <Projects projects={projects}/>} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
