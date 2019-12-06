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
import Post from './post';
import Menu from './menu';
import { CSSTransition } from 'react-transition-group';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'sign-in',
        params: {},
        info: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params, info) {
    const view = {
      name,
      params,
      info
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
          <CSSTransition
            in={true}
            appear={true}
            classNames="fade"
            timeout={500}>
            <SignIn setView={this.setView} />
          </CSSTransition>
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
      case 'detailed-profile':
        return (
          <DetailedProfileView
            setView={this.setView}
            currentUser={this.state.view.params}
            profileId={this.state.view.info}/>
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
      case 'post':
        return (
          <Post
            setView={this.setView}
            currentUser={this.state.view.params}/>
        );
      case 'menu':
        return (
          <CSSTransition
            in={true}
            appear={true}
            classNames="left-slide-in"
            timeout={500}>
            <Menu
              setView={this.setView}
              currentUser={this.state.view.params}
              previousPage={this.state.view.info} />
          </CSSTransition>
        );
      default:
        return <h1>Misssssss Seplling</h1>;
    }
  }
}
