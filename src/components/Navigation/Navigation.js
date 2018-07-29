import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => (
  <header>
    <div className="menu-btn">
      <div className='btn-line'></div>
      <div className='btn-line'></div>
      <div className='btn-line'></div>
    </div>
    <nav className='menu'>
      <div className='menu-branding'>
        <div className='portrait'></div>
      </div>
      <ul className='menu-nav'>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/about">About Me</NavigationItem>
        <NavigationItem link="/work">My Work</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
      </ul>
    </nav>
  </header>
);

export default Navigation;