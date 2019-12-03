import React from 'react';
import BottomMenu from './bottom-menu';

export default class Likepage extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-color d-flex justify-content-between align-items-center sticky-top">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <i className=" fas fa-bars fas-size p-2"></i>
        </div>

        <div className="container fix-overlap">
          <div className="row mb-3 align-content-center">
            <div className="col-6">
              <img src='/images/jackie.png' className="rounded img-fluid photo-size" />
            </div>
            <div className="col-6 align-content-center row likes-bottom-line row">
              <div className="mdate col-12 text-center">2019-11-20</div>
              <div className=" col-12 h2 text-center">Jackie</div>
              <div className=" col-12 text-center">You liked her back!</div>
            </div>
          </div>

          <div className="row mb-3 align-content-center">
            <div className="col-6">
              <img src='/images/vivian.png' className="rounded img-fluid likes-photo" />
            </div>
            <div className="col-6 align-content-center row likes-bottom-line row">
              <div className="mdate col-12 text-center">2019-11-20</div>
              <div className=" col-12 h2 text-center">Vivian</div>
              <div className=" col-12">
                <i className="fas fa-heart fas-size3 likeHeart red col-6"></i>
                <i className="fas fa-heart-broken fas-size3 likeHeart col-6"></i>
              </div>
            </div>
          </div>

          <div className="row mb-3 align-content-center">
            <div className="col-6">
              <img src='/images/jennifer.jpg' className="rounded img-fluid likes-photo" />
            </div>
            <div className="col-6 align-content-center row likes-bottom-line row">
              <div className="mdate col-12 text-center">2019-11-17</div>
              <div className=" col-12 h2 text-center">Jennifer</div>
              <div className=" col-12">
                <i className="fas fa-heart fas-size3 likeHeart red col-6"></i>
                <i className="fas fa-heart-broken fas-size3 likeHeart col-6"></i>
              </div>
            </div>
          </div>

          <div className="row mb-3 align-content-center">
            <div className="col-6">
              <img src='/images/sarah.png' className="rounded img-fluid likes-photo" />
            </div>
            <div className="col-6 align-content-center row likes-bottom-line row">
              <div className="mdate col-12 text-center">2019-11-10</div>
              <div className=" col-12 h2 text-center">Sarah</div>
              <div className=" col-12">
                <i className="fas fa-heart fas-size3 likeHeart red col-6"></i>
                <i className="fas fa-heart-broken fas-size3 likeHeart col-6"></i>
              </div>
            </div>
          </div>

          <div className="row mb-3 align-content-center">
            <div className="col-6">
              <img src='/images/sarah.png' className="rounded img-fluid likes-photo" />
            </div>
            <div className="col-6 align-content-center row likes-bottom-line row">
              <div className="mdate col-12 text-center">2019-11-10</div>
              <div className=" col-12 h2 text-center">Sarah</div>
              <div className=" col-12">
                <i className="fas fa-heart fas-size3 likeHeart red col-6"></i>
                <i className="fas fa-heart-broken fas-size3 likeHeart col-6"></i>
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
