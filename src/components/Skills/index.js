import React, { Component } from 'react';
import '../../styles/css/skills.css'
// import '../../styles/sass/skills.sass'
import icons from './icons.js'

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="container">
          {/* {icons.map((icon, index) => <i className={`${icon}-${index}`} key={index}></i>)} */}
          {icons.map((icon, index) => <i className={icon} key={index}></i>)}
        </div>
      </div>
    )
  }
}

export default Skills
