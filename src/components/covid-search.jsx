import React, { Component } from "react";

class CovidSearch extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default CovidSearch;
