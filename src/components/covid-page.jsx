import React, { Component } from "react";
import axios from "axios";

import CovidCard from "./covid-card";
import CovidSearch from "./covid-search";
import Chart from "react-google-charts";

class CovidPage extends Component {
  state = {
    response: {},
  };

  // When component mounts, request USA lastest COVID data from API
  componentDidMount = () => {
    this.covidAPIRequest("USA");
  };

  //Function for fetching COVID data from API
  covidAPIRequest = async (country, today = true) => {
    //Get today's date
    if (today === true) {
      var date = new Date();
      var dd = String(date.getDate()).padStart(2, "0");
      var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = date.getFullYear();
      date = yyyy + "-" + mm + "-" + dd;
    } else {
      var date = today;
    }

    var options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/history",
      params: { country: country, day: date },
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "547ec5b5e0mshb62bcb250461234p109f16jsn629a4642ecbe",
      },
    };

    await axios
      .request(options)
      .then((response) => {
        return response.data.response[0];
      })
      .then((response) => {
        console.log(response);
        const country = response.country;
        const date = response.day;
        const { active, critical, recovered, total } = this.dataCleaning(
          response.cases
        );
        const confirmed = total;
        const deaths = this.dataCleaning(response.deaths).total;
        this.setState({
          response: {
            country,
            date,
            active,
            critical,
            recovered,
            confirmed,
            deaths,
          },
        });
        console.log(this.state);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //Request data from API with search submits
  handleSubmit = (value) => {
    this.covidAPIRequest(value);
  };

  //Date is cleaned by adding commas to numbers
  dataCleaning(response) {
    const res = {};
    for (const data in response) {
      let resData = response[data];
      if (typeof response[data] === "number") {
        resData = response[data].toLocaleString("en-US");
      }
      res[data] = resData;
    }
    return res;
  }

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
        <CovidSearch onSubmit={this.handleSubmit} />
        <CovidCard response={this.state.response} />
        {/* <Chart
          width={"600px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["time", "dogs"],
            [0, 0],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 33],
            [9, 40],
            [10, 32],
            [11, 35],
          ]}
          options={{
            hAxis: {
              title: "Time",
            },
            vAxis: {
              title: "Popularity",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        /> */}
      </React.Fragment>
    );
  }
}

export default CovidPage;
