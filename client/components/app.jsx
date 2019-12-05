import React from 'react';
import MainLogin from './main-login';
import SignIn from './sign-in';
import NewUser from './new-user';
import IndividualMessage from './individual-message';
import DetailedProfileView from './detailed-profile-view';
import DiscoverPage from './discover-page';
import LikePage from './like-page';
import Filter from './filter';
import MessageHistory from './message-history';
import Moments from './moments';

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
      case 'individual-message':
        return (
          <IndividualMessage
            setView={this.setView}
            userId={this.state.view.params}/>
        );
      case 'profile':
        return (
          <DetailedProfileView setView={this.setView}/>
        );
      case 'discover-page':
        return (
          <DiscoverPage
            setView={this.setView}
            currentUser={this.state.view.params}
            currentPage="discover-page"/>
        );
      case 'message-history':
        return (
          <MessageHistory
            setView={this.setView}
            currentUser={this.state.view.params}
            currentPage="message-history"/>
        );
      case 'moments':
        return (
          <Moments
            setView={this.setView}
            currentUser={this.state.view.params}
            currentPage="moments" />
        );
      case 'like-page':
        return (
          <LikePage
            setView={this.setView}
            currentUser={this.state.view.params}
            currentPage="like-page"/>
        );
      case 'filter':
        return (
          <Filter />
        );
      default:
        return <h1>Misssssss Seplling</h1>;
    }
  }
}
