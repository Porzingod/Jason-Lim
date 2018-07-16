import React, { Component } from 'react';
import '../../styles/css/about.css'
// import '../../styles/sass/about.sass'

class About extends Component {
  render() {
    const { profilePic, background } = this.props
    return (
      <div>
        <img className="background-image" src={background} alt="Joes Valley" />
        <div className="About">
          <div className="col-container main">

            <div className="row-container">
              <div className="profile-container">
                <div className="col"></div>
                <div className="profile">
                  <img src={profilePic} alt="Jason Lim" />
                </div>
                <div className="col"></div>
              </div>
              <div className="content">
                <h2>Jason Lim</h2>
                <p>
                  I'm a full stack web developer highly interested in building highly functional and beautiful web applications.
                </p>
                <p>
                  I'm also classically trained singer, an avid rock climber, and a depressed, lifelong Knick fan.
                </p>
                <p>
                  I realized my passion for programming when I built my first command line application. I was in awe that what started as an idea, written down into code, became a tangible application.
                </p>
                <p>
                  Since the start of my coding journey I've continually built on my Javascript and Ruby skills while learning frameworks such as React, Redux and Ruby on Rails to help build bigger and more complex projects.
                </p>
              </div>
            </div>

            <hr/>

            <div className="row-container bottom">
              <div className="profile-bottom-container">
                <div className="profile-bottom">
                  <img src={profilePic} alt="Jason Lim" />
                </div>
              </div>
              <div className="contact-info">
                <div>jasonlim.ny@gmail.com</div>
                <a href="https://github.com/Porzingod" target="blank"><i className="devicon-github-plain"></i></a>
                <a href="https://www.linkedin.com/in/jason-lim-ny/" target="blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://medium.com/@porzingod" target="blank"><i className="fab fa-medium"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default About
