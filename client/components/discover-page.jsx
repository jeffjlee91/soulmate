import React from 'react';
import BottomMenu from './bottom-menu';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          userId: 1,
          age: '20',
          city: 'rowland',
          email: 'wenhao@soulmate.com',
          ethnicity: 'Asian',
          firstName: 'Sarah',
          gender: 'Female',
          height: "5'4",
          iAm: 'I am superman.',
          iAppreciate: 'I think my other half should be beautiful.',
          iLike: 'I like to walk over the mountain.',
          images: 'images/sarah.png',
          jobTitle: 'fisherman',
          lastName: 'wang',
          password: 'root',
          religion: 'Buddhist',
          state: 'CA'
        },
        {
          userId: 2,
          age: '20',
          city: 'rowland',
          email: 'wenhao@soulmate.com',
          ethnicity: 'Asian',
          firstName: 'Wenhao',
          gender: 'Female',
          height: "5'11",
          iAm: 'I am superman.',
          iAppreciate: 'I think my other half should be beautiful.',
          iLike: 'I like to walk over the mountain.',
          images: 'images/Wenhao.png',
          jobTitle: 'fisherman',
          lastName: 'wang',
          password: 'root',
          religion: 'Buddhist',
          state: 'CA'
        },
        {
          userId: 3,
          age: '24',
          city: 'rowland',
          email: 'wenhao@soulmate.com',
          ethnicity: 'Asian',
          firstName: 'Irene',
          gender: 'Female',
          height: "5'11",
          iAm: 'I am superman.',
          iAppreciate: 'I think my other half should be beautiful.',
          iLike: 'I like to walk over the mountain.',
          images: 'images/Irene.jpg',
          jobTitle: 'fisherman',
          lastName: 'wang',
          password: 'root',
          religion: 'Buddhist',
          state: 'CA'
        }
      ]
    };
  }

  // getUsers() {
  //     fetch('')
  //       .then(res => res.json())
  //       .then(users => {
  //         this.setState({
  //           users: users
  //         });
  //       });
  //   }
  // navbar fixed-bottom navbar-expand-sm navbar-dark gray
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
          setView={this.props.setView}
          currentUser={this.props.currentUser}/>
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
