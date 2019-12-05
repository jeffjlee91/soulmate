import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className={`bg-color menu-slidout ${this.props.slidIn}`}>
        <div className="d-flex justify-content-end">
          <i className="fas fa-times fas-size p-2"
            onClick={() => this.props.slidOut()}></i>
        </div>
        <div className="container">
          <h1>Hello, Jeff</h1>
          <img src="images/Jeff.jpg" className="menu-photo" />
          <h3>Change password</h3>
          <h3>Post</h3>
          <h3>Logout</h3>
        </div>
      </div>
    );
  }
}
