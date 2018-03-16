import React, {Component} from 'react';
import logo from '../assets/nick-logo-330x300.jpg';
class Header extends Component{
  render(){
    return (
      <div className="row">

        <img className=" logo-img" src={logo} alt="Nick Nedev Logo"/>
        <div className="col-sm">
          <h1>Nick Nedev</h1>
          <h3>full stack javascript developer</h3>
        </div>
        
      </div>
    )
  }
}

export default Header;