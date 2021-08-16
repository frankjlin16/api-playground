import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <span className="navbar-brand">API Playground</span>
          <div className="collpase navbar-collapse">
            <div className="navbar-nav">
              <li onClick={() => this.props.changePage('home')} className={`nav-link ${this.props.page === 'home' ? 'active' : ''}`}>
                Home
              </li>
              <li onClick={() => this.props.changePage('covid')} className={`nav-link ${this.props.page === 'covid' ? 'active' : ''}`}>
                COVID
              </li>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
