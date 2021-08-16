import React, { Component } from "react";
import HomePage from "./home-page";
import CovidPage from "./covid-page";

class AppBody extends Component {
  state = {};
  render() {
    if (this.props.page === "home") {
      return <HomePage />;
    } else if (this.props.page === "covid") {
      return <CovidPage />;
    }
  }
}

export default AppBody;
