import React from 'react';
import BottomMenu from './bottom-menu';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="container bg-color">
        <div className="row">
          <i className="col-10"></i>
          <i className="fas fa-times fas-size p-2 col-2"></i>
        </div>
        <div className="d-flex justify-content-center row align-content-center full-view-height">
          <h1 className="title col-12 mb-3">UserName</h1>
          <div className="container">
            <img src='/images/Alex.png' alt="some guy face" className=" user-photo rounded-circle" />
          </div>
          <div className="mt-3 slogan">Soulmate is an overused term,</div>
          <div className="mb-5 slogan">but a true soul connection is very rare, and very real.</div>
          <div>
            <div className="text-center h4">
            Change Password
            </div>
            <div className="text-center h4">
            View Profile
            </div>
            <div className="text-center h4">
            Logout
            </div>
          </div>
        </div>
        <BottomMenu />
      </div>
    );
  }
}
