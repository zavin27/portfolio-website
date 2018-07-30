import React from 'react';
import {NavLink} from 'react-router-dom';


const NavigationItem = props => {
  return (
    <li className={'nav-item ' + props.show}>
      <NavLink to={props.link} className='nav-link'>
        {props.children}
      </NavLink>
    </li>
  )
};

export default NavigationItem