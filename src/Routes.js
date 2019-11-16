import {Route, Switch} from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Work from "./container/Work";
import Contact from "./container/Contact";
import React from "react";

export default () => (
	<Switch>
		<Route path='/' exact component={Home}/>
		<Route path='/about' component={About}/>
		<Route path='/work' component={Work}/>
		<Route path='/contact' component={Contact}/>
		{/*<Redirect to='/'/>*/}
	</Switch>
)
