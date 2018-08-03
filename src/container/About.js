import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Portrait from '../assets/images/portrait.jpg';
import Job from '../components/Job/Job';
import Footer from '../components/Footer';


class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Zavin Hussein | About Me</title>
        </Helmet>
        <main id='about'>
          <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
          <h2 className="sm-heading">Let me tell you a few things...</h2>
          <div className='about-info'>
            <img src={Portrait} className='bio-image' alt='Zavin Hussein'/>
            <div className="bio">
              <h3 className="text-secondary">Summary</h3>
              <p>Hardworking, dedicated person, love to explore, always have a big hunger for new knowledge, optimist in
                life, passionate about my work, willing to help others, fast learner.</p>
            </div>
            {/*<Job*/}
            {/*jobClass='job-1'*/}
            {/*jobDescription='job Description'*/}
            {/*jobPosition='job position'*/}
            {/*jobDetails='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur dolores eaque impedit natus numquam. Doloribus officia tempora tempore?'/>*/}
            {/*<Job*/}
            {/*jobClass='job-2'*/}
            {/*jobDescription='job Description'*/}
            {/*jobPosition='job position'*/}
            {/*jobDetails='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur dolores eaque impedit natus numquam. Doloribus officia tempora tempore?'/>*/}
            {/*<Job*/}
            {/*jobClass='job-3'*/}
            {/*jobDescription='job Description'*/}
            {/*jobPosition='job position'*/}
            {/*jobDetails='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur dolores eaque impedit natus numquam. Doloribus officia tempora tempore?'/>*/}
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default About;