import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";


class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <body id='bg-img'></body>
        </Helmet>
        <main id='home'>
          <h1 className="lg-heading">Zavin <span className="text-secondary">Hussein</span></h1>
          <h2 className="sm-heading">Web Developer, Programmer</h2>
          <div className='icons'>
            <Link to='/'>
              <FontAwesomeIcon className='fab fa-2x' icon={faTwitter}/>
            </Link>
            <Link to='/'>
              <FontAwesomeIcon className='fab fa-2x' icon={faFacebook}/>
            </Link>
            <Link to='/'>
              <FontAwesomeIcon className='fab fa-2x' icon={faGithub}/>
            </Link>
            <Link to='/'>
              <FontAwesomeIcon className='fab fa-2x' icon={faLinkedin}/>
            </Link>
          </div>
        </main>
      </div>
    )
  }
}

export default Home;