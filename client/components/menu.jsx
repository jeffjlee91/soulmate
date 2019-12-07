import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className='bg-color'>
        <div className="d-flex justify-content-end">
          <i className="fas fa-times fas-size p-2"
            onClick={() =>
              this.props.setView(
                this.props.previousPage,
                this.props.currentUser
              )
            }
          ></i>
        </div>
        <div className="container">
          <h1>Hello, {this.props.currentUser.firstName}</h1>
          <img src={this.props.currentUser.images} className="menu-photo" />
          <h3>Change password</h3>
          <h3
            onClick={() =>
              this.props.setView(
                'main',
                {},
                {}
              )
            }
          >Logout</h3>
        </div>
      </div>
    );
  }
}
