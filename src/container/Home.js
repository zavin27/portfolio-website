import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Home = () => (
	<div>
		<img src={require('../assets/images/Autumn_fireball.jpg')} id={'bg-img'} alt={'background'}/>
		<main id='home'>
			<h1 className="lg-heading">Zavin <span className="text-secondary">Hussein</span></h1>
			<h2 className="sm-heading">Mobile / Web Developer</h2>
			<div className='icons'>
				<a href='https://github.com/zavin27' target={'_blank'}>
					<FontAwesomeIcon className='fab fa-2x' icon={faGithub}/>
				</a>
				<a href='https://www.linkedin.com/in/zavinhussein/' target={'_blank'}>
					<FontAwesomeIcon className='fab fa-2x' icon={faLinkedin}/>
				</a>
			</div>
		</main>
	</div>
);

export default Home;
