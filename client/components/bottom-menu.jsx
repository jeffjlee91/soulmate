import React from 'react';
class BottomMenu extends React.Component {

  render() {
    return (
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark gray">
        <div className='text-center width-25 opac50'>
          <i className="fas fa-map-marker-alt fa-lg lightgray "></i>
          <h6 className='lightgray '>Maps</h6>
        </div>
        <div className='text-center width-25 opac50'>
          <i className="fas fa-heart fa-lg lightgray "></i>
          <h6 className='lightgray '>Likes</h6>
        </div>
        <div className='text-center width-25 opac50'>
          <i className="fas fa-search fa-lg lightgray "></i>
          <h6 className='lightgray '>Discover</h6>
        </div>
        <div className='text-center width-25 opac50'>
          <i className="fas fa-comments fa-lg lightgray "></i>
          <h6 className='lightgray '>Chats</h6>
        </div>
      </nav>
    );
  }
}
export default BottomMenu;
