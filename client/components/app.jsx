import React from 'react';
import MainLogin from './main-login';
import SignIn from './sign-in';
import NewUser from './new-user';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'main',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    const view = {
      name,
      params
    };
    this.setState({ view });
  }

  render() {
    switch (this.state.view.name) {
      case 'main':
        return (
          <MainLogin setView={this.setView}/>
        );
      case 'sign-in':
        return (
          <SignIn setView={this.setView}/>
        );
      case 'new-user':
        return (
          <NewUser setView={this.setView}/>
        );
      default:
        return <h1>Misssssss Seplling</h1>;
    }
  }
}
