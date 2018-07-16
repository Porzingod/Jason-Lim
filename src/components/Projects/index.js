import React, { Component } from 'react';
import '../../styles/css/projects.css'
// import '../../styles/sass/projects.sass'

class Projects extends Component {
  render() {
    const { fridge, doggo } = this.props
    return (
      <div className="Projects">
        <div className="container">
          <img className="background-image" src={fridge} alt="Fridge Boss"/>
        </div>
        {/* <div className="container">
          <img className="background-image" src={doggo} alt="Doggo Daycare"/>
        </div> */}
      </div>
    )
  }
}

export default Projects
