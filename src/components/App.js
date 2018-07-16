import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About'
import Navigation from './Navigation'
import Projects from './Projects'
import Skills from './Skills'

import ProfilePic from '../images/profile-pic.png'
import Joes1 from '../images/joes1.jpg'
import Joes2 from '../images/joes2.jpg'
import fridge from '../images/fridge-boss.jpeg'
import doggo from '../images/doggo-daycare.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Switch>
            <Redirect exact from="/" to="/jason-lim" />
            <Route exact path="/jason-lim" render={(props) => <About profilePic={ProfilePic} background={Joes1}/>} />
            <Route path="/jason-lim/projects" render={(props) => <Projects fridge={fridge} doggo={doggo}/>} />
            <Route path="/jason-lim/skills" component={Skills} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
