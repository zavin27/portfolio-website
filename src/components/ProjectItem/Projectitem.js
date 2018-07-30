import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const projectitem = (props) => (
  <div className="item">
    <Link to={props.projectLink}>
      <img src={props.imageSource} alt={props.projectName}/>
    </Link>
    <Link to={props.projectLink} className='btn-light'>
      <FontAwesomeIcon icon={faEye}/>
      {' ' + props.projectName}
    </Link>
    <Link to={props.githubLink} className='btn-dark'>
      <FontAwesomeIcon icon={faGithub}/>
      {' Github'}
    </Link>
  </div>
);

export default projectitem;