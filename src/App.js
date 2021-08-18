import React, { Component } from "react";
import Navbar from "./components/navbar";
import AppBody from "./components/app-body";
class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { page: "home" };
  }

  //App is divided into two different sections: Navbar and AppBody.
  render() {
    return (
      <React.Fragment>
        <Navbar page={this.state.page} onPageChange={this.handlePageChange} />
        <AppBody page={this.state.page} />
        <div className="mt-4">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span
                href="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <svg className="bi" width="30" height="24">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </span>
              <span className="text-muted">© 2021 Company, Inc</span>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }

  //Changes the state page based on navbar changes.
  handlePageChange = (page) => {
    this.setState({ page });
  };
}

export default App;
