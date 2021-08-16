import React, { Component } from "react";
import Navbar from "./components/navbar";
import AppBody from "./components/app-body";
class App extends Component {
  state = {
    page: "home",
  };

  //App is divided into two different sections: Navbar and AppBody.
  render() {
    return (
      <React.Fragment>
        <Navbar page={this.state.page} changePage={this.changePage} />
        <AppBody page={this.state.page} />
      </React.Fragment>
    );
  }

  //Changes the state page based on navbar changes.
  changePage = (page) => {
    this.setState({ page });
  };
}

export default App;
