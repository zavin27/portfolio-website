import React, {useRef} from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

const NAV_LINKS = [
	{path: '/', label: 'Home'},
	{path: '/about', label: 'About Me'},
	{path: '/work', label: 'My Work'},
	{path: '/contact', label: 'Contact'},
];
const Navigation = ({navClicked, toggleMenu, show, pathname}) => {
	let {current: {showStyle, closeStyle}} = useRef({showStyle: '', closeStyle: ''});
	
	if (show) {
		showStyle = 'show';
		closeStyle = 'close';
	} else {
		showStyle = '';
		closeStyle = '';
	}
	
	return (
		<header>
			<div className={"menu-btn " + closeStyle} onClick={toggleMenu}>
				<div className='btn-line'/>
				<div className='btn-line'/>
				<div className='btn-line'/>
			</div>
			<nav className={'menu ' + showStyle}>
				<ul className={'menu-nav ' + showStyle}>
					{NAV_LINKS.map(item => (
						<li className={'nav-item ' + showStyle} onClick={navClicked}>
							<NavLink to={item.path} exact className='nav-link'>
								{item.label}
							</NavLink>
							{pathname === item.path && <Helmet>
								<title>{item.label} | Zavin Hussein</title>
							</Helmet>}
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
};

Navigation.propTypes = {
	toggleMenu: PropTypes.func.isRequired,
	navClicked: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	pathname: PropTypes.string.isRequired,
};

export default Navigation;
