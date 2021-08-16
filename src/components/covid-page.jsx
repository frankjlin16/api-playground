import React, { Component } from "react";

class CovidPage extends Component {
  state = {};
  render() {
    return (
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Welcome to the COVID Page</h1>
        <div className="col-md-6 mx-auto border-bottom">
          <p className="lead mb-4">
            We collect information from several reliable sources, like Johns
            Hopkins CSSE, CDC, WHO and a few others. All our sources are
            verified, and we avoid collecting information that is not confirmed
            by official authorities. Every country sends official reports
            differently. From once per day to every hour. That depends on the
            scale of the pandemic and the time zone. Nevertheless, we are trying
            to update every new information ASAP. If you have a specific wish,
            please let us know (Discussions), and we will try to put it on our
            road map. This is a non-profit humanitarian project, and all the
            money we get goes for better servers, data providers and other
            expenses for providing you with a better, faster and more reliable
            API. Stay safe.
          </p>
        </div>
        <div class="container mt-3" id="hanging-icons">
          <div class="row g-4 py- row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlinkHref="#toggles2"></use>
                </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlinkHref="#cpu-fill"></use>
                </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlinkHref="#tools"></use>
                </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CovidPage;
