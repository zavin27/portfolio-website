import React from 'react';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import Footer from '../components/Footer';


const Work = () => (
	<div>
		<main id='work'>
			<h1 className="lg-heading">My <span className="text-secondary">Work</span></h1>
			<h2 className="sm-heading">Check out some of my projects...</h2>
			<div className='projects'>
				<ProjectItem
					projectName='Burger Builder'
					projectLink='https://react-my-burger-builder-33479.firebaseapp.com/'
					githubLink='https://github.com/zavin27/Burger-Builder'
					imageSource={require('../assets/images/Burger_builder.png')}/>
				<ProjectItem
					projectName='To Do List'
					projectLink='http://desolate-reaches-48348.herokuapp.com/post'
					githubLink='https://github.com/zavin27/To-Do-List'
					imageSource={require('../assets/images/To-do-list.jpg')}/>
			</div>
		</main>
		<Footer/>
	</div>
);

export default Work;
