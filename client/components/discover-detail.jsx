import React from 'react';

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
          <img src={this.props.users.images} className='card-img-top'></img>
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

export default DiscoverDetail;
