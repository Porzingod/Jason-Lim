import React, { Component } from 'react';
import '../../styles/css/projects.css'
// import '../../styles/sass/projects.sass'
import Project from './Project'

class Projects extends Component {
  render() {
    const { projects } = this.props
    return (
      <div className="Projects">
        <div className="col-container">
          {projects.map((project, index) => <Project project={project} key={index}/>)}
        </div>
      </div>
    )
  }
}

export default Projects
