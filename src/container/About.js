import React from 'react';
import Footer from '../components/Footer';


const About = () => (
	<div>
		<main id='about'>
			<h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
			<h2 className="sm-heading">Let me tell you a few things...</h2>
			<div className='about-info'>
				<img src={require('../assets/images/portrait.jpg')} className='bio-image' alt='Zavin Hussein'/>
				<div className="bio">
					<h3 className="text-secondary">Summary</h3>
					<p>Hardworking, dedicated person, love to explore, always have a big hunger for new knowledge,
						optimist in
						life, passionate about my work, willing to help others, fast learner.</p>
				</div>
			</div>
		</main>
		<Footer/>
	</div>
);


export default About;
