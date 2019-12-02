import React from 'react';

class LeftMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="text-center message-date">
            2019-12-02 04:48:07
          </div>
        </div>
        <div className="d-flex mb-2">
          <img src="images/sarah.png" className="message-photo" />
          <div className="d-flex">
            <i className="fas fa-angle-left message-arrow-left"></i>
            <p className="bg-white message-body align-self-center">Hello HelloHello HelloHello HelloHello HelloHello Hello
              Hello HelloHello HelloHello HelloHello HelloHello HelloHello HelloHello Hello</p>
          </div>
        </div>
      </div>
    );
  }
}

class RightMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="text-center message-date">
            2019-12-02 04:48:07
          </div>
        </div>
        <div className="d-flex mb-2">
          <div className="d-flex">
            <p className="bg-white message-body align-self-center">Hello HelloHello HelloHello HelloHello HelloHello Hello
              Hello HelloHello HelloHello HelloHello HelloHello HelloHello HelloHello Hello</p>
            <i className="fas fa-angle-right message-arrow-right"></i>
          </div>
          <img src="images/Jeff.jpg" className="message-photo" />
        </div>
      </div>
    );
  }
}

export default class IndividualMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-color d-flex justify-content-between align-items-center sticky-top">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <i className="fas fa-bars fas-size p-2"></i>
        </div>

        <div className="container fix-overlap">
          <LeftMessage />
          <RightMessage />
          <RightMessage />
          <RightMessage />
          <LeftMessage />
          <LeftMessage />
          <RightMessage />
          <LeftMessage />
          <RightMessage />
          <RightMessage />
          <RightMessage />
          <LeftMessage />
          <LeftMessage />
          <RightMessage />
        </div>
        <div className="fixed-bottom gray">
          <div className="container d-flex align-items-center">
            <textarea type="text" className="message-input" rows="1"/>
            <i className="fas fa-feather fas-size p-2 text-white"></i>
          </div>
        </div>
      </div>
    );
  }
}
