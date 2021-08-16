import React, { Component } from "react";
import Navbar from "./components/navbar";
import AppBody from "./components/app-body";
class App extends Component {
  state = {
    page: 'home',
  };
  render() {
    return (
      <React.Fragment>
        <Navbar page={this.state.page} changePage={this.changePage} />
        <AppBody page={this.state.page} />
      </React.Fragment>
    );
  }

  changePage = (page) => {
    this.setState({ page });
  }
}

export default App;
