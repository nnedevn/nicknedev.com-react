import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransitions } from 'react-transition-group';
import Home from "./Home";
import Projects from "./Projects";

class Navigation extends Component {
  burgerToggle = e => {
    let linksEl = document.querySelector(".narrow-links");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  render() {
    return (
      <div>
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
                Home
              </Link>
              <Link to="/projects" onClick={this.burgerToggle}>
                Projects
              </Link>
              <Link to="#" onClick={this.burgerToggle}>
                Resume
              </Link>
            </div>
            <div />
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </div>
    );
  }
}

export default Navigation;
