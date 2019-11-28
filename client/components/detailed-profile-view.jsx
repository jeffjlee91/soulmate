import React from 'react';

export default class DetailedProfileView extends React.Component {
  render() {
    return (
      <div className="container bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <i className="fas fa-bars fas-size p-2"></i>
        </div>
        <div className="row">
          <img src='/images/Alex.png' alt="some guy face" className="img-fluid photo-size rounded-top"/>
        </div>
        <div className="row bg-secondary">
          <div className="row col-12 text-light h3">
            <div className="col-12">Meet Alex</div>
          </div>
          <div className="row col-12 text-light h5 rounded-bottom">
            <div className="col-4 fas fa-birthday-cake"> 25</div>
            <div className="col-4 fas fa-ruler-vertical"> 5&apos;10</div>
            <div className="col-4 fas fa-male"> Male</div>
          </div>
        </div>
        <div className="row">
          <h4 className='col-12'>Job Title</h4>
          <h5 className="text-secondary col-12">Actor</h5>
        </div>
        <div className="row">
          <h4 className='col-12'>Location</h4>
          <h5 className="text-secondary col-12">Irvine, CA</h5>
        </div>
        <div className="row">
          <h4 className='col-12'>Religion</h4>
          <h5 className="text-secondary col-12">Agnostic</h5>
        </div>
        <div className="row">
          <h4 className='col-12'>Ethnicity</h4>
          <h5 className="text-secondary col-12">Caucasian</h5>
        </div>
        <div className="row">
          <h4 className='col-12'>I am....</h4>
          <h5 className="text-secondary col-12">A movie fanatic and a hardcore star wars diehard fan</h5>
        </div>
        <div className="row">
          <h4 className='col-12'>I like...</h4>
          <h5 className="text-secondary col-12">Eating pizza on the roof and watchin the stars from my couch </h5>
        </div>
        <div className="row">
          <h4 className='col-12'>I appreciate...</h4>
          <h5 className="text-secondary col-12">Long walks on the beach and eating peanut butter. </h5>
        </div>
      </div>
    );
  }
}
