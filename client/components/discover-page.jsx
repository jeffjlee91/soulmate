import React from 'react';
import BottomMenu from './bottom-menu';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { gender: 'Male' },
      users: []
    };
  }

  getUsers() {
    const user = this.state.currentUser;
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };
    fetch('/api/discover-page', req)
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users
        });
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className='bg-color'>
        <nav className="bg-color fixed-top navbar d-flex justify-content-between align-items-center">
          <i className="fas fa-sliders-h fas-size p-2"></i>
          <i className="fas fa-bars fas-size p-2"></i>
        </nav>
        <div className='container cardlist'>
          {this.state.users.map(user => {
            return (
              <DiscoverDetail key={user.userId} users={user}/>
            );
          })}
        </div>
        <BottomMenu
          currentPage={this.props.currentPage}
          setView={this.props.setView}/>
      </div>
    );
  }
}

class DiscoverDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  // componentDidMount() {
  //     const userId = this.props.user.userId;
  //     fetch(``)
  //         .then(res => res.json())
  //         .then(user => {
  //             this.setState({
  //                 user: user
  //             });
  //         });
  // }

  render() {
    return (
      <div>
        <div className='card text-center card-padding'>
          <img src={this.props.users.images} className='card-img-top card-image-discover'></img>
          <div className='card-body'>
            <h2 className=''>{this.props.users.firstName}{', '}{this.props.users.age}</h2>
            <div>
              <i className="fas fa-heart fas-size3 likeHeart red"></i>
              <i className="fas fa-heart-broken fas-size3 likeHeart"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverPage;