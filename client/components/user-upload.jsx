import React from 'react';
import BottomMenu from './bottom-menu';

export default class UserUpload extends React.Component {

  render() {
    return (
      <div>

        <div className="bg-color d-flex justify-content-between align-items-center sticky-top">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <i className=" fas fa-bars fas-size p-2"></i>
        </div>
        <div>
          <div className="row">
            <div className="col-2">
              <img src="images/Irene.jpg" className=" ml-3 img-fluid micro-photo" />
            </div>
            <div className="col-4 micro-font d-flex align-items-center">Irene123567890</div>
          </div>
          <div className=" container row micro-font2 ml-1 mt-1">
            This is my super cute cat. Please take a look. This is my super cute cat.
            This is my super cute cat. Please take a look. He is a very serious guy.
            This is my super cute cat.
          </div>
          <img src="images/cat.png" className="img-fluid photo-stats" />
          <div className=" col-12 row">
            <i className="fas fa-heart fas-size3 likeHeart grey mb-1 mt-1"></i>
            <i className="mt-1">0</i>
          </div>
        </div>

        <div>
          <div className="row ">
            <div className="col-2">
              <img src="images/vivian.png" className=" ml-3 img-fluid micro-photo" />
            </div>
            <div className="col-4 micro-font d-flex align-items-center">VivianL123567890</div>
          </div>
          <div className=" container row micro-font2 ml-1 mt-1">
            I love to eat.I love to eat.I love to eat.I love to eat.I love to eat.
            I love to eat.I love to eat.I love to eat.I love to eat.
            I love to eat.I love to eat.I love to eat.I love to eat.I love to eat.
          </div>
          <img src="images/food.jpg" className="img-fluid photo-stats" />
          <div className=" col-12 row">
            <i className="fas fa-heart fas-size3 likeHeart grey"></i>
            <i className="fix-overlap">-999</i>
          </div>
        </div>
        <BottomMenu
          currentPage={this.props.currentPage}
          currentUser={this.props.currentUser}
          setView={this.props.setView} />
      </div>
    );
  }
}
