import React from 'react';

export default class MainLogin extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-color">
        <div className="d-flex justify-content-center row align-content-center full-view-height">
          <div className="h1">
            Soul Mate
          </div>
          <div className="mt-5">
          Soulmate is an overused term,
          </div>
          <div>
            but a true soul connection is very rare, and very real.
          </div>

          <button type="button" className="btn btn-outline-secondary col-7 mt-4 btn-shadow">Sign In</button>
          <button type="button" className="btn btn-secondary col-7 mt-3 mb-3 btn-shadow">New User</button>
          <div className="row justify-content-center">
            ____________________________or_________________________
          </div>
          <div className="row mt-2 d-flex justify-content-between">
            <button type="button" className="btn btn-primary col-5.5 mt-2 btn-shadow">Sign in with Facebook </button>
            <button type="button" className="btn btn-danger col-5.5 mt-2 ml-2 btn-shadow">Sign in with Google</button>
          </div>
        </div>
      </div>
    );
  }
}
