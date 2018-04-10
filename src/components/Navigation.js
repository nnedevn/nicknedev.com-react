import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";

class Navigation extends Component {
  burgerToggle = e => {
    e.preventDefault();
    let linksEl = document.querySelector(".narrow-links");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  render() {
    return (
      <Router>
        <nav>
          <div className="nav-wide">
            <div className="wide-div">
              <Link to="/">about</Link>
              <Link to="/projects">projects</Link>
              <Link to="#">resume</Link>
            </div>
          </div>
          <div className="nav-narrow">
            <button className="fa fa-bars fa-2x" onClick={this.burgerToggle}>
              ===
            </button>
            <div className="narrow-links">
              <Link to="/" onClick={this.burgerToggle}>
                Link 11
              </Link>
              <Link to="/projects" onClick={this.burgerToggle}>
                Link 22
              </Link>
              <Link to="#" onClick={this.burgerToggle}>
                Link 33
              </Link>
            </div>
            <div />
          </div>

          <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
        </nav>
        
      </Router>
    );
  }
}

export default Navigation;
