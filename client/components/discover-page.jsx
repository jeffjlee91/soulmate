import React from 'react';
import BottomMenu from './bottom-menu';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filter: {}
    };
    this.cardWasClicked = this.cardWasClicked.bind(this);
    this.filterWasClicked = this.filterWasClicked.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
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
        if (this.props.filter === undefined) {
          this.setState({
            users: users
          });
        } else {
          const filteredArray = [];
          users.map(user => {
            if (this.filterUsers(user)) {
              filteredArray.push(this.filterUsers(user));
            }
            this.setState({
              users: filteredArray
            });
          });
        }
      });
  }

  filterUsers(user) {

    const locationArray = user.location.split(',');
    const userCity = locationArray[0];

    const newUserStateArray = locationArray[1].split('');
    newUserStateArray.shift();
    const userState = newUserStateArray.join('');

    const newUserHeightArray = user.height.split('');
    const userHeightFeet = newUserHeightArray[0];
    let userHeightInch = null;

    if (newUserHeightArray.length === 5) {
      userHeightInch = newUserHeightArray[2] + newUserHeightArray[3];
    } else {
      userHeightInch = newUserHeightArray[2];
    }

    if (this.props.filter.heightMinFeet && this.props.filter.heightMinInch === null) {
      this.props.heightMinInch = 0;
    }

    if (this.props.filter.heightMaxFeet && this.props.filter.heightMaxInch === null) {
      this.props.heightMaxInch = 0;
    }

    if (this.props.filter.heightMinInch && this.props.filter.heightMinFeet === null) {
      this.props.heightMinFeet = 4;
    }

    if (this.props.filter.heightMaxInch && this.props.filter.heightMaxFeet === null) {
      this.props.heightMaxFeet = 7;
    }

    if (this.props.filter.city !== null && this.props.filter.city !== userCity) {
      return false;
    }

    if (this.props.filter.state !== userState && this.props.filter.state !== null) {
      return false;
    }

    if (user.age < this.props.filter.ageMin && this.props.filter.ageMin !== null) {
      return false;
    }

    if (user.age > this.props.filter.ageMax && this.props.filter.ageMax !== null) {
      return false;
    }

    if (this.props.filter.heightMaxFeet !== null && this.props.filter.heightMaxFeet < userHeightFeet) {
      return false;
    }

    if (this.props.filter.heightMinFeet > userHeightFeet && this.props.filter.heightMinFeet !== null) {
      return false;
    }

    if (this.props.filter.heightMaxInch !== null && this.props.filter.heightMaxInch < userHeightInch) {
      return false;
    }

    if (this.props.filter.heightMinInch !== null && this.props.filter.heightMinInch > userHeightInch) {
      return false;
    }

    if (user.ethnicity !== this.props.filter.ethnicity && this.props.filter.ethnicity !== null) {
      return false;
    }

    if (user.religion !== this.props.filter.religion && this.props.filter.religion !== null) {
      return false;
    }
    return user;
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

  filterWasClicked() {
    this.props.setView('filter', this.props.currentUser);
  }

  profileWasClicked() {
    this.props.setView('profile');
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    if (this.state.users) {
      return (
        <div className='container bg-color'>
          <nav className="bg-color fixed-top navbar d-flex justify-content-between align-items-center">
            <i onClick={this.filterWasClicked} className="fas fa-sliders-h fas-size p-2"></i>
            <i onClick={this.profileWasClicked} className="fas fa-bars fas-size p-2"></i>
          </nav>
          <div className='cardlist'>
            {this.state.users.map(user => {
              return (
                <DiscoverDetail key={user.userId} users={user} currentUser={this.props.currentUser} cardWasClicked={this.cardWasClicked}/>
              );
            })}
          </div>
          <BottomMenu />
        </div>
      );
    } else {
      return (
        <div className='container bg-color'>
          <nav className="bg-color fixed-top navbar d-flex justify-content-between align-items-center">
            <i onClick={this.filterWasClicked} className="fas fa-sliders-h fas-size p-2"></i>
            <i onClick={this.profileWasClicked} className="fas fa-bars fas-size p-2"></i>
          </nav>
          <div>Please broaden your filter search for additional matches!
          </div>
          <BottomMenu />
        </div>
      );
    }

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
