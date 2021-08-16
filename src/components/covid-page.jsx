import React, { Component } from "react";
import axios from "axios";

class CovidPage extends Component {
  state = {
    response: {},
  };

  // When component mounts, request USA lastest COVID data from API
  componentDidMount = () => {
    const options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country",
      params: { name: "USA", format: "json" },
      headers: {
        "x-rapidapi-key": "547ec5b5e0mshb62bcb250461234p109f16jsn629a4642ecbe",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({ response: response.data[0] });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="px-4 py-5 my-5 text-center border-bottom">
          <h1 className="display-5 fw-bold mb-4">Welcome to the COVID Page</h1>
          <div className="col-md-6 mx-auto">
            <p className="lead mb-4">
              We collect information from several reliable sources, like Johns
              Hopkins CSSE, CDC, WHO and a few others. All our sources are
              verified, and we avoid collecting information that is not
              confirmed by official authorities.
            </p>
          </div>
        </div>
        <div className="m-3">
          <h2>{this.state.response.country}</h2>
          <ul>
            <li>Confirmed: {this.state.response.confirmed}</li>
            <li>Recovered: {this.state.response.recovered}</li>
            <li>Critical: {this.state.response.critical}</li>
            <li>Deaths: {this.state.response.deaths}</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CovidPage;
