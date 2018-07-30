import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const projectitem = (props) => (
  <div className="item">
    <a href={props.projectLink}>
      <img src={props.imageSource} alt={props.projectName}/>
    </a>
    <a href={props.projectLink} className='btn-light'>
      <FontAwesomeIcon icon={faEye}/>
      {' ' + props.projectName}
    </a>
    <a href={props.githubLink} className='btn-dark'>
      <FontAwesomeIcon icon={faGithub}/>
      {' Github'}
    </a>
  </div>
);

export default projectitem;