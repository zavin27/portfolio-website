import React from 'react';
import Footer from '../components/Footer';


const Contact = () => (
	<div>
		<main id='contact'>
			<h1 className="lg-heading">Contact <span className="text-secondary">Me</span></h1>
			<h2 className="sm-heading">This is how you can reach me...</h2>
			<div className="boxes">
				<div>
					<span className='text-secondary'>Email:</span> Zavinhussein@gmail.com
				</div>
				<div>
					<span className='text-secondary'>Phone:</span> +40 720964360
				</div>
				<div>
					<span className='text-secondary'>From:</span> Bucharest, Romania
				</div>
			</div>
		</main>
		<Footer/>
	</div>
);

export default Contact;
