import React from 'react';
import BottomMenu from './bottom-menu';

export default class Moments extends React.Component {

  render() {
    return (
      <div>
        <div className="bg-color d-flex justify-content-between align-items-center sticky-top">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <i className=" fas fa-bars fas-size p-2"></i>
        </div>

        <div>
          <div className="mb-3">
            <div className="d-flex align-items-center container">
              <img src="images/Irene.jpg" className="img-fluid micro-photo" />
              <div className="micro-font ml-3">Irene123567890</div>
            </div>
            <div className="micro-font2 mt-2 mb-2 container">
              This is my super cute cat. Please take a look. This is my super cute cat.
              This is my super cute cat. Please take a look. He is a very serious guy.
              This is my super cute cat.
            </div>
            <img src="images/cat.png" className="img-fluid photo-stats" />
            <div className="d-flex align-items-center container mt-2">
              <i className="fas fa-heart fas-size3 grey"></i>
              <h3 className="ml-3">0</h3>
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex align-items-center container">
              <img src="images/Irene.jpg" className="img-fluid micro-photo" />
              <div className="micro-font ml-3">Irene123567890</div>
            </div>
            <div className="micro-font2 mt-2 mb-2 container">
              This is my super cute cat. Please take a look. This is my super cute cat.
              This is my super cute cat. Please take a look. He is a very serious guy.
              This is my super cute cat.
            </div>
            <img src="images/cat.png" className="img-fluid photo-stats" />
            <div className="d-flex align-items-center container mt-2">
              <i className="fas fa-heart fas-size3 grey"></i>
              <h3 className="ml-3">0</h3>
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex align-items-center container">
              <img src="images/Irene.jpg" className="img-fluid micro-photo" />
              <div className="micro-font ml-3">Irene123567890</div>
            </div>
            <div className="micro-font2 mt-2 mb-2 container">
              This is my super cute cat. Please take a look. This is my super cute cat.
              This is my super cute cat. Please take a look. He is a very serious guy.
              This is my super cute cat.
            </div>
            <img src="images/cat.png" className="img-fluid photo-stats" />
            <div className="d-flex align-items-center container mt-2">
              <i className="fas fa-heart fas-size3 grey"></i>
              <h3 className="ml-3">0</h3>
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex align-items-center container">
              <img src="images/Irene.jpg" className="img-fluid micro-photo" />
              <div className="micro-font ml-3">Irene123567890</div>
            </div>
            <div className="micro-font2 mt-2 mb-2 container">
              This is my super cute cat. Please take a look. This is my super cute cat.
              This is my super cute cat. Please take a look. He is a very serious guy.
              This is my super cute cat.
            </div>
            <img src="images/cat.png" className="img-fluid photo-stats" />
            <div className="d-flex align-items-center container mt-2">
              <i className="fas fa-heart fas-size3 grey"></i>
              <h3 className="ml-3">0</h3>
            </div>
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
