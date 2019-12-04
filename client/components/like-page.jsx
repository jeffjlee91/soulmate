import React from 'react';
import BottomMenu from './bottom-menu';

class IndividualLike extends React.Component {
  render() {
    const data = this.props.user.createdAt;
    return (
      <div className="row mb-3 align-content-center">
        <div className="col-6">
          <img src={this.props.user.images} className="rounded img-fluid likes-photo" />
        </div>
        <div className="col-6 row likes-bottom-line row">
          <div className="mdate col-12 text-center">{data.split(' ').shift()}</div>
          <div className=" col-12 h2 text-center">{this.props.user.firstName}</div>
          <div className=" col-12 row">
            <i className="fas fa-heart fas-size3 likeHeart red col-6"></i>
            <i className="fas fa-heart-broken fas-size3 likeHeart col-6"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default class Likepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: []
    };
  }

  componentDidMount() {
    this.getLikesData();
  }

  getLikesData() {
    const currentUser = this.props.currentUser.userId;
    fetch(`/api/likes?idTo=${currentUser}`)
      .then(res => res.json())
      .then(likes => this.setState({ likes }))
      .catch(err => alert('getLikesData error', err));
  }

  render() {
    return (
      <div>
        <div className="bg-color d-flex justify-content-between align-items-center sticky-top">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <i className=" fas fa-bars fas-size p-2"></i>
        </div>

        <div className="container fix-overlap">
          {this.state.likes.map(cur => <IndividualLike user={cur} key={cur.createdAt} />)}
        </div>

        <BottomMenu
          currentPage={this.props.currentPage}
          currentUser={this.props.currentUser}
          setView={this.props.setView}/>
      </div>
    );
  }
}
