import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import ProjectItem from '../components/ProjectItem/Projectitem';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.jpg';


class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>View My Work</title>
        </Helmet>
        <main id='work'>
          <h1 className="lg-heading">My <span className="text-secondary">Work</span></h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <div className='projects'>
            <ProjectItem
              projectName='Project'
              projectLink='#'
              githubLink='#'
              imageSource={project1}/>
            <ProjectItem
              projectName='Project'
              projectLink='#'
              githubLink='#'
              imageSource={project2}/>
            <ProjectItem
              projectName='Project'
              projectLink='#'
              githubLink='#'
              imageSource={project3}/>
            <ProjectItem
              projectName='Project'
              projectLink='#'
              githubLink='#'
              imageSource={project4}/>
            <ProjectItem
              projectName='Project'
              projectLink='#'
              githubLink='#'
              imageSource={project5}/>
          </div>
        </main>
        <footer id='main-footer'>
          Copyright &copy; 2018
        </footer>
      </div>
    )
  }
}

export default About;