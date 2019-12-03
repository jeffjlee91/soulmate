
import React from 'react';
class BottomMenu extends React.Component {

  render() {
    return (
      <div className="fixed-bottom gray d-flex p-1 pt-2">
        <div className='text-center width-25 opac50'>
          <i className="fas fa-map-marker-alt fa-lg lightgray "></i>
          <div className='lightgray '>Maps</div>
        </div>
        <div className='text-center width-25 opac50'>
          <i className="fas fa-heart fa-lg lightgray "></i>
          <div className='lightgray '>Likes</div>
        </div>
        <div className='text-center width-25 opac50'>
          <i className="fas fa-search fa-lg lightgray "></i>
          <div className='lightgray '>Discover</div>
        </div>
        <div className='text-center width-25 opac50'>
          <i className="fas fa-comments fa-lg lightgray "></i>
          <div className='lightgray '>Chats</div>
        </div>
      </div>
    );
  }
}
export default BottomMenu;
