import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import ProjectItem from '../components/ProjectItem/Projectitem';
import BurgerBuilder from '../assets/images/Burger_builder.png';
import ToDoList from '../assets/images/To-do-list.jpg';
import Footer from '../components/Footer';


class Work extends Component {
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
              projectName='Burger Builder'
              projectLink='https://react-my-burger-builder-33479.firebaseapp.com/'
              githubLink='https://github.com/zavin27/Burger-Builder'
              imageSource={BurgerBuilder}/>
            <ProjectItem
              projectName='To Do List'
              projectLink='http://desolate-reaches-48348.herokuapp.com/post'
              githubLink='https://github.com/zavin27/To-Do-List'
              imageSource={ToDoList}/>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Work;