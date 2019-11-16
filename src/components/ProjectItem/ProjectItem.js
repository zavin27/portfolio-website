import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const projectItem = (props) => (
	<div className="item">
		<a href={props.projectLink} target={'_blank'}>
			<img src={props.imageSource} alt={props.projectName}/>
		</a>
		<a href={props.projectLink} className='btn-light' target={'_blank'}>
			<FontAwesomeIcon icon={faEye}/>
			{' ' + props.projectName}
		</a>
		<a href={props.githubLink} className='btn-dark' target={'_blank'}>
			<FontAwesomeIcon icon={faGithub}/>
			{' Github'}
		</a>
	</div>
);

export default projectItem;
