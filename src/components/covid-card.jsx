import React, { Component } from "react";

class CovidCard extends Component {
  state = {};
  render() {
    const { response } = this.props;
    if (response.country === undefined) {
      return (
        <div className="alert alert-warning m-4" role="alert">
          Country can't be found. Please try again later.
        </div>
      );
    }
    return (
      <div
        className="card m-4
      "
      >
        <div className="card-body">
          <h2 className="card-title text-center">{response.country} Latest</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Confirmed:{" "}
              <span className="badge bg-primary rounded-pill">
                {response.confirmed}
              </span>
            </li>
            <li className="list-group-item">
              Recovered:{" "}
              <span className="badge bg-primary rounded-pill">
                {response.recovered}
              </span>
            </li>
            <li className="list-group-item">
              Critical:{" "}
              <span className="badge bg-primary rounded-pill">
                {response.critical}
              </span>
            </li>
            <li className="list-group-item">
              Deaths:{" "}
              <span className="badge bg-primary rounded-pill">
                {response.deaths}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CovidCard;
