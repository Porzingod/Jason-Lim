import React, { Component } from 'react';
import './style.sass'

class About extends Component {
  render() {
    const { profilePic, background } = this.props
    return (
      <div>
        <img className="background-image" src={background} alt="Joes Valley" />
        <div className="About">
          <img className="profile-image-top" src={profilePic} alt="Jason Lim" />
          <div className="content">
            <h2>Jason Lim</h2>
            <p>
              I'm a full stack web developer that loves building highly functional and beautiful web applications.
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
          <div className="Contact">
            <img className="profile-image-bottom" src={profilePic} alt="Jason Lim" />
            <div className="contact-info">
              <div>jasonlim.ny@gmail.com</div>
              <a href="https://github.com/Porzingod" target="_blank"><i class="devicon-github-plain"></i></a>
              <a href="https://www.linkedin.com/in/jason-lim-ny/" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a href="https://medium.com/@porzingod" target="_blank"><i class="fab fa-medium"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
