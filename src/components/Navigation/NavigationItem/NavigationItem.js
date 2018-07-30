import React from 'react';
import {NavLink} from 'react-router-dom';


const NavigationItem = props => {
  return (
    <li className={'nav-item ' + props.show} onClick={props.navClicked}>
      <NavLink to={props.link} exact className='nav-link'>
        {props.children}
      </NavLink>
    </li>
  )
};

export default NavigationItem