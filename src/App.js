import React, {Component} from 'react';
// import './App.css';
import './scss/main.scss';
import Home from './container/Home';
import About from './container/About';
import Work from './container/Work';
import Contact from './container/Contact';
import Layout from "./hoc/Layout";
import {Route, Switch, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
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

export default App;
