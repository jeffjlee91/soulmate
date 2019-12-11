import React from 'react';

export default class MainLogin extends React.Component {

  signInHandler() {
    this.props.setView('sign-in', {});
  }

  newUserHandler() {
    this.props.setView('new-user', {});
  }

  render() {
    return (
      <div className="container bg-bar">
        <div className="d-flex justify-content-center row align-content-center full-view-height">
          <img src='/images/flower4-menu1.jpg' className='sign-in-background1'></img>
          <img src='/images/flower4-menu2.jpg' className='sign-in-background2'></img>
          <h1 className="title col-12">Soul Mate</h1>
          <div className="mt-2 slogan">Soulmate is an overused term,</div>
          <div className="mb-2 slogan">but a true soul connection is very rare, and very real.</div>
          <button
            type="button"
            className="btn btn-outline-secondary col-10 mt-4 btn-shadow"
            onClick={this.signInHandler.bind(this)}>Sign In</button>
          <button
            type="button"
            className="btn btn-secondary col-10 mt-3 mb-3 btn-shadow"
            onClick={this.newUserHandler.bind(this)}>New User</button>
          <div className="row mt-2 d-flex justify-content-between">
            <button type="button" className="btn btn-primary col-5.5 mt-2 btn-shadow button">Facebook </button>
            <button type="button" className="btn btn-danger col-5.5 mt-2 ml-2 btn-shadow button">Google</button>
          </div>
        </div>
      </div>
    );
  }
}
