import React, { Component } from 'react';
import './style.sass'
import icons from './icons.js'

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="container">
          {icons.map(icon => <i class={icon}></i>)}
        </div>
      </div>
    )
  }
}

export default Skills
