import React, { Component } from 'react';
import '../../styles/css/projects.css'
// import '../../styles/sass/projects.sass'
import Project from './Project'

class Projects extends Component {
  render() {
    const { projects } = this.props
    return (
      <div className="Projects">
        {projects.map((project, index) => <Project project={project} key={index}/>)}
      </div>
    )
  }
}

export default Projects
