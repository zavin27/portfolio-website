import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Aux from './Aux';

class Layout extends Component {
  
  state = {
    showMenu: false,
  };
  
  menuToggleHandler = () => {
    !this.state.showMenu ? this.setState({showMenu: true}) : this.setState({showMenu: false});
  };
  
  onNavLinkClickedHandler = () => {
    this.setState({showMenu: false})
  };
  
  render() {
    return (
      <Aux>
        <Navigation
          clicked={this.menuToggleHandler}
          navClicked={this.onNavLinkClickedHandler}
          show={this.state.showMenu}/>
          {this.props.children}
      </Aux>
    )
  }
}

export default Layout;