import React, {Component} from 'react';
// import './App.css';
import './scss/main.scss';
import Home from './container/Home';
import About from './container/About';
import Work from './container/Work';
import Contact from './container/Contact';
import Layout from "./hoc/Layout";
import {Redirect, Route, Switch} from 'react-router-dom';
import {withRouter} from "react-router";


class App extends Component {
 
	componentDidUpdate(prevProps, prevState, snapshot) {
		document.title = this.props.history.location.pathname;
	}
	
	render() {
	  console.log(this.props);
		return (
			<div>
				<Layout>
					<Switch>
						<Route path='/' exact component={Home}/>
						<Route path='/about' component={About}/>
						<Route path='/work' component={Work}/>
						<Route path='/contact' component={Contact}/>
						<Redirect to='/'/>
					</Switch>
				
				</Layout>
			</div>
		);
	}
}

export default withRouter(App);
