import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className='container bg-color'>
        <nav className="bg-color fixed-top navbar d-flex justify-content-between align-items-center">
          <i className="fas fa-angle-left fas-size p-2"></i>
        </nav>
      </div>
    );
  }
}

export default Filter;
