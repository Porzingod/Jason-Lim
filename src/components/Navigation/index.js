import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/css/navigation.css'

const style = {
  active: {
    background: "rgba(255, 255, 255, .25)",
    color: "rgba(255, 255, 255)"
  }
}

class Navigation extends Component {

  jumpTo = e => {
    console.log(e.target.innerText)
  }

  render() {
    const { active } = style
    return (
      <div className="Navigation">
        <NavLink activeStyle={ active } exact to="/jason-lim">About</NavLink>
        <NavLink activeStyle={ active } to="/jason-lim/projects">Projects</NavLink>
        <NavLink activeStyle={ active } to="/jason-lim/skills">Skills</NavLink>
      </div>
    )
  }
}

export default Navigation
