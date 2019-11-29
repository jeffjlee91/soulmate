import React from 'react';

export default class ChangePassword extends React.Component {
  render() {
    return (
      <div className="container bg-color">
        <div className="d-flex justify-content-center row align-content-center full-view-height">
          <h1 className="title col-12">Soul Mate</h1>
          <div className="mt-3 slogan">Soulmate is an overused term,</div>
          <div className="mb-5 slogan">but a true soul connection is very rare, and very real.</div>
          <form className="col-10">
            <div className="form-group mt-4">
              <input type="password" className="simple-box col-12" id="password" placeholder="old password" minLength='8' required />
              <div className="invalid-feedback">At least 8 characters!</div>
            </div>
            <div className="form-group mt-4">
              <input type="password" className="simple-box col-12" id="password" placeholder=" new password" minLength='8' required />
              <div className="invalid-feedback">At least 8 characters!</div>
            </div>
            <div className="form-group mt-4">
              <input type="password" className="simple-box col-12" id="password" placeholder=" repeat password" minLength='8' required />
              <div className="invalid-feedback">At least 8 characters!</div>
            </div>

            <div className="row mt-4 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary col-5.5 btn-shadow button">Save </button>
              <button type="button" className="btn btn-dark col-5.5 ml-4 btn-shadow button">Back</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
