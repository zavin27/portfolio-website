import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Portrait from '../assets/images/portrait.jpg';
import Job from '../components/Job/Job';


class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About Me</title>
        </Helmet>
        <main id='about'>
          <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
          <h2 className="sm-heading">Let me tell you a few things...</h2>
          <div className='about-info'>
            <img src={Portrait} className='bio-image' alt='Zavin Hussein'/>
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at atque, commodi consequatur dolor illo
                ipsum itaque iusto maiores molestiae, nesciunt officia pariatur provident quod ratione recusandae
                sapiente similique voluptatibus.</p>
            </div>
            <Job
              jobClass='job-1'
              jobDescription='job Description'
              jobPosition='job position'
              jobDetails='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur dolores eaque impedit natus numquam. Doloribus officia tempora tempore?'/>
            <Job
              jobClass='job-2'
              jobDescription='job Description'
              jobPosition='job position'
              jobDetails='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur dolores eaque impedit natus numquam. Doloribus officia tempora tempore?'/>
            <Job
              jobClass='job-3'
              jobDescription='job Description'
              jobPosition='job position'
              jobDetails='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur dolores eaque impedit natus numquam. Doloribus officia tempora tempore?'/>
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