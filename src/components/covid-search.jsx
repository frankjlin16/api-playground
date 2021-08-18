import React, { Component } from "react";

class CovidSearch extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    if (this.state.value !== "") {
      this.props.onSubmit(this.state.value);
    }
  };

  render() {
    return (
      <div className="container">
        <form
          className="row justify-content-center"
          onSubmit={this.handleSearchSubmit}
        >
          <div className="col-7">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="form-control btn btn-outline-success"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CovidSearch;
