import React from 'react';
import BottomMenu from './bottom-menu';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.cardWasClicked = this.cardWasClicked.bind(this);
  }

  getUsers() {
    const user = this.props.currentUser;
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

  cardWasClicked(userIdtoRemove) {
    const newArray = [];
    this.state.users.forEach(user => {
      if (user.userId !== userIdtoRemove) {
        newArray.push(user);
      }
    });
    this.setState({
      users: newArray
    });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className='container bg-color'>
        <nav className="bg-color fixed-top navbar d-flex justify-content-between align-items-center">
          <i className="fas fa-sliders-h fas-size p-2"></i>
          <i className="fas fa-bars fas-size p-2"></i>
        </nav>
        <div className='cardlist'>
          {this.state.users.map(user => {
            return (
              <DiscoverDetail key={user.userId} users={user} currentUser={this.props.currentUser} cardWasClicked={this.cardWasClicked}/>
            );
          })}
        </div>
        <BottomMenu
          currentPage={this.props.currentPage}
          currentUser={this.props.currentUser}
          setView={this.props.setView} />
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
    this.likeClicked = this.likeClicked.bind(this);
    this.dislikeClicked = this.dislikeClicked.bind(this);
  }

  likeClicked() {
    const likeData = {
      idFrom: this.props.currentUser.userId,
      idTo: this.props.users.userId,
      isLike: true
    };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(likeData)
    };
    fetch('/api/likes', req)
      .then(res => res.json());
    this.props.cardWasClicked(this.props.users.userId);
  }

  dislikeClicked() {
    const dislikeData = {
      idFrom: this.props.currentUser.userId,
      idTo: this.props.users.userId,
      isLike: 0
    };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dislikeData)
    };
    fetch('/api/likes', req)
      .then(res => res.json());
    this.props.cardWasClicked(this.props.users.userId);
  }

  render() {
    return (
      <div>
        <div className='card text-center card-padding'>
          <img src={this.props.users.images} className='card-img-top card-image-discover'></img>
          <div className='card-body'>
            <h2 className=''>{this.props.users.firstName}{', '}{this.props.users.age}</h2>
            <div>
              <i onClick={this.likeClicked} className="fas fa-heart fas-size3 likeHeart red"></i>
              <i onClick={this.dislikeClicked} className="fas fa-heart-broken fas-size3 likeHeart"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverPage;
