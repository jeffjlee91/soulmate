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
import UserUpload from './user-upload';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'sign-in',
        params: {},
        filter: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params, filter) {
    const view = {
      name,
      params,
      filter
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
            filter={this.state.view.filter}
            currentPage="discover-page"/>
        );
      case 'message-history':
        return (
          <MessageHistory
            setView={this.setView}
            currentUser={this.state.view.params}
            currentPage="message-history"/>
        );
      case 'like-page':
        return (
          <LikePage
            setView={this.setView}
            currentUser={this.state.view.params}
            c/>
        );
      case 'filter':
        return (
          <Filter
            setView={this.setView}
            currentUser={this.state.view.params}
            currentPage="filter"/>
        );
      case 'user-upload':
        return (
          <UserUpload />
        );
      default:
        return <h1>Misssssss Seplling</h1>;
    }
  }
}
