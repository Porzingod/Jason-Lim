import React, { Component } from 'react';

class Project extends Component {
  render() {

    const { project: {title, github, image, live, video, description}} = this.props

    return (
      <div className="Project">
        <img src={image} alt={title}/>
        <div className="info">
          <div className="content">
            <h2>{title}</h2>
            <span>{description}</span>
            <div>
              <a href={github} target="blank">Github</a>
              <a href={live} target="blank">Live Demo</a>
              <a href={video} target="blank">Video Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
