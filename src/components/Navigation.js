import React, { Component } from "react";

class Navigation extends Component {
 
  burgerToggle = (e) => {
    e.preventDefault();
    let linksEl = document.querySelector('.narrow-links');
    if (linksEl.style.display === 'block'){
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wide">
          <div className="wide-div">
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
          </div>
        </div>

        <div className="nav-narrow">
        <button className="fa fa-bars fa-2x" onClick={this.burgerToggle}>asdf</button>
          <div className="narrow-links">
            <a href="#" onClick={this.burgerToggle}>Link 11</a>
            <a href="#" onClick={this.burgerToggle}>Link 22</a>
            <a href="#" onClick={this.burgerToggle}>Link 3</a>
          </div>
        </div> 
      </nav>
    )
  }
} 

export default Navigation;
