import React, { Component } from "react";

class CovidSearch extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
      this.setState({value: event.target.value})
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  };


  render() {
    return (
      <div className="container">
        <form className="d-flex" onSubmit={this.handleSearchSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" className="btn btn-outline-success" />
        </form>
      </div>
    );
  }
}

export default CovidSearch;
