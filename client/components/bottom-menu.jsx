
import React from 'react';
class BottomMenu extends React.Component {
  render() {
    const currentPage = this.props.currentPage;
    let likesOpac, discoverOpac, chatsOpac;
    likesOpac = discoverOpac = chatsOpac = 'opac50';
    switch (currentPage) {
      case 'message-history':
        chatsOpac = 'opac100';
        break;
      case 'discover-page':
        discoverOpac = 'opac100';
        break;
      case 'like-page':
        likesOpac = 'opac100';
        break;
    }
    return (
      <div className="fixed-bottom gray d-flex p-1 pt-2">
        <div className={`text-center width-25 ${'opac50'}`}>
          <i className="fas fa-map-marker-alt fa-lg lightgray "></i>
          <div className='lightgray '>Maps</div>
        </div>

        <div
          className={`text-center width-25 ${likesOpac}`}
          onClick={ () => this.props.setView('like-page') }>
          <i className="fas fa-heart fa-lg lightgray "></i>
          <div className='lightgray '>Likes</div>
        </div>

        <div
          className={`text-center width-25 ${discoverOpac}`}
          onClick={() => this.props.setView('discover-page')}>
          <i className="fas fa-search fa-lg lightgray "></i>
          <div className='lightgray '>Discover</div>
        </div>

        <div
          className={`text-center width-25 ${chatsOpac}`}
          onClick={() => this.props.setView('message-history')}>
          <i className="fas fa-comments fa-lg lightgray "></i>
          <div className='lightgray '>Chats</div>
        </div>
      </div>
    );
  }
}
export default BottomMenu;
