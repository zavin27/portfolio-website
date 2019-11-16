import React, {Fragment, useState} from 'react';
import './scss/main.scss';
import Routes from "./Routes";
import {withRouter} from "react-router-dom";
import Navigation from "./components/Navigation";


function App(props) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<Fragment>
			<Navigation
				toggleMenu={() => setShowMenu(!showMenu)}
				navClicked={() => setShowMenu(false)}
				show={showMenu}
				pathname={props.history.location.pathname}/>
			<Routes/>
		</Fragment>
	);
}

export default withRouter(App);
