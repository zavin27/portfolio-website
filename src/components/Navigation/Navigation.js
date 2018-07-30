import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
  
  let show = '';
  let close = '';
  
  if (props.show) {
    show = 'show';
    close = 'close';
  } else {
    show = '';
    close = '';
  }
  return (
    <header>
      <div className={"menu-btn " + close} onClick={props.clicked}>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>
      <nav className={'menu ' + show}>
        <div className={'menu-branding ' + show}>
          <div className='portrait'></div>
        </div>
        <ul className={'menu-nav ' + show}>
          <NavigationItem link="/" show={show}>Home</NavigationItem>
          <NavigationItem link="/about" show={show}>About Me</NavigationItem>
          <NavigationItem link="/work" show={show}>My Work</NavigationItem>
          <NavigationItem link="/contact" show={show}>Contact</NavigationItem>
        </ul>
      </nav>
    </header>
  )
};

export default Navigation;