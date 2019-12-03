import React from 'react';
import BottomMenu from './bottom-menu';

export default class MessageHistory extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-color d-flex justify-content-between align-items-center sticky-top">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <i className=" fas fa-bars fas-size p-2"></i>
        </div>

        <div className=" container fix-overlap">
          <div>
            <div className="d-flex flex-row-reverse bd-highlight">
              <div className="bd-highlight mdate">2019-09-17</div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src='/images/jackie.png' className="rounded img-fluid photo-size" />
              </div>
              <div className="col-9 d-flex align-content-center likes-bottom-line row">
                <div className="col-12"> Alex</div>
                <div className="col-12 mdate2">Hey there,  I am...</div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex flex-row-reverse bd-highlight">
              <div className="bd-highlight mdate">2019-09-15</div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src='/images/jennifer.jpg' className="rounded img-fluid photo-size" />
              </div>
              <div className="col-9 d-flex align-content-center likes-bottom-line row">
                <div className="col-12"> Alex</div>
                <div className="col-12 mdate2">Hey there,  I am...</div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex flex-row-reverse bd-highlight">
              <div className="bd-highlight mdate">2019-09-13</div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src='/images/vivian.png' className="rounded img-fluid photo-size" />
              </div>
              <div className="col-9 d-flex align-content-center likes-bottom-line row">
                <div className="col-12"> Jackie</div>
                <div className="col-12 mdate2">Hey there,  I am...</div>
              </div>
            </div>
          </div>

        </div>
        <BottomMenu
          currentPage={this.props.currentPage}
          setView={this.props.setView}/>
      </div>
    );
  }
}
