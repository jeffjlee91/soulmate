import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Menu extends React.Component {
  render() {
    return (
      <div className='bg-color over-flow-hidden'>
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
          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-hello"
            timeout={500}
          >
            <div className="d-flex align-items-center">
              <h2>Hello, {this.props.currentUser.firstName}</h2>
              <img
                src={this.props.currentUser.images}
                className="menu-photo ml-2"
              />
            </div>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-moments"
            timeout={500}
          >
            <h3>
              Moments
            </h3>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-likes"
            timeout={500}
          >
            <h3>
                Likes
            </h3>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-discover"
            timeout={500}
          >
            <h3>
              Discover
            </h3>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-chats"
            timeout={500}
          >
            <h3>
              Chats
            </h3>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-edit"
            timeout={500}
          >
            <h3
              onClick={() => this.props.setView(
                'edit',
                this.props.currentUser,
                this.props.previousPage
              )}
            >
              Edit
            </h3>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-password"
            timeout={500}
          >
            <h3
              onClick={() =>
                this.props.setView(
                  'change-password',
                  this.props.currentUser,
                  this.props.previousPage
                )
              }
            >Change password</h3>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames="menu-fade-logout"
            timeout={500}
          >
            <h3
              onClick={() =>
                this.props.setView(
                  'main',
                  {},
                  {}
                )
              }
            >Logout</h3>
          </CSSTransition>
        </div>
        <CSSTransition
          in={true}
          appear={true}
          classNames="menu-bg-one"
          timeout={500}
        >
          <div className="menu-bg-one"></div>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames="menu-bg-two"
          timeout={500}
        >
          <div className="menu-bg-two"></div>
        </CSSTransition>
      </div>
    );
  }
}
