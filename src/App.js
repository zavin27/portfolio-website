import React, {Component} from 'react';
// import './App.css';
import './scss/main.scss';
import Home from './container/Home';
import Layout from "./hoc/Layout";


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home/>
        </Layout>
      </div>
    );
  }
}

export default App;
