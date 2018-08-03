import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Helmet} from "react-helmet";


class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Zavin Hussein | Welcome To My Portfolio</title>
          <body id='bg-img'></body>
        </Helmet>
        <main id='home'>
          <h1 className="lg-heading">Zavin <span className="text-secondary">Hussein</span></h1>
          <h2 className="sm-heading">Web Developer, Programmer</h2>
          <div className='icons'>
            <a href='https://github.com/zavin27'>
              <FontAwesomeIcon className='fab fa-2x' icon={faGithub}/>
            </a>
            <a href='https://www.linkedin.com/in/zavinhussein/'>
              <FontAwesomeIcon className='fab fa-2x' icon={faLinkedin}/>
            </a>
          </div>
        </main>
      </div>
    )
  }
}

export default Home;