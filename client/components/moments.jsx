import React from 'react';
import BottomMenu from './bottom-menu';

class IndividualMoment extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <div className="d-flex align-items-center container">
          <img src={this.props.moment.images} className="img-fluid micro-photo" />
          <div className="micro-font ml-3">{this.props.moment.firstName}</div>
        </div>
        <div className="micro-font2 mt-2 mb-2 container">
          {this.props.moment.message}
        </div>
        <img src={this.props.moment.picture} className="img-fluid photo-stats" />
        <div className="d-flex align-items-center container mt-2">
          <i className="fas fa-heart fas-size3 grey"></i>
          <h3 className="ml-3">{this.props.moment.likes}</h3>
        </div>
      </div>
    );
  }
}

export default class Moments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: []
    };
  }

  componentDidMount() {
    this.getMomentsData();
  }

  getMomentsData() {
    const gender = this.props.currentUser.gender;
    fetch(`/api/moments?gender=${gender}`)
      .then(res => res.json())
      .then(moments => {
        this.setState({ moments });
      }).catch(err => alert('getMomentsData error', err));
  }

  render() {
    return (
      <div>
        <div className="bg-color d-flex justify-content-between align-items-center sticky-top">
          <i
            className="fas fa-camera fas-size p-2"
            onClick={() => this.props.setView('post', this.props.currentUser)}></i>
          <i className="fas fa-bars fas-size p-2"></i>
        </div>

        <div className="fix-overlap">
          {this.state.moments.map(cur => <IndividualMoment key={cur.momentId} moment={cur} />)}
        </div>

        <BottomMenu
          currentPage={this.props.currentPage}
          currentUser={this.props.currentUser}
          setView={this.props.setView} />
      </div>
    );
  }
}
