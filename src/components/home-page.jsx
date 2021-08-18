import React, { Component } from "react";


class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Welcome to API Playground!</h1>
        <div className="col-md-10 mx-auto">
          <p className="lead mb-4">
            It all began at a hackathon in 2015. RapidAPI was made by developers
            for developers so they could have one place to access APIs and
            Microservices and build applications more efficiently and easily.
            Today, RapidAPI is the world's largest API Hub where almost 3
            million developers can find, test, and connect to tens of thousands
            of APIs — all with a single account, single API key, and single SDK.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
