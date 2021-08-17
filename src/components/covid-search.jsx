import React, { Component } from "react";

class CovidSearch extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default CovidSearch;
