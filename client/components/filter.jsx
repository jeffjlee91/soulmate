import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minAge: 20,
      maxAge: 30
    };
  }

  render() {
    return (
      <div className='container bg-color'>
        <nav className="bg-color fixed-top navbar d-flex justify-content-between align-items-center">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <h3 className=''>Filter</h3>
        </nav>
        <div className="form-group row filterlist">
          <div className="col-12">
            <label htmlFor="religion">Location</label>
            <select id="religion" className="custom-select input"
              name="religion"
              // value={this.state.newUser.religion}
              // onChange={this.inputHandler}>
            >
              <option defaultValue>Choose...</option>
              <option value="Christian">Christian</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Catolic">Catolic</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className="col-12 filterOptionMargin">
            <label htmlFor="ethnicity">Ethnicity</label>
            <select id="ethinicity" className="custom-select input"
              name="ethnicity"
              // value={this.state.newUser.ethnicity}
              // onChange={this.inputHandler}>
            >
              <option defaultValue>Choose...</option>
              <option value="Asian">Asian</option>
              <option value="Caucasian">Caucasian</option>
              <option value="Latino">Latino</option>
              <option value="Black">Black</option>
              <option value="Middle Eastern">Middle Eastern</option>
            </select>
          </div>
          <div className="col-12 filterOptionMargin">
            <label htmlFor="religion">Religion</label>
            <select id="religion" className="custom-select input"
              name="religion"
              // value={this.state.newUser.religion}
              // onChange={this.inputHandler}>
            >
              <option defaultValue>Choose...</option>
              <option value="Christian">Christian</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Catolic">Catolic</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className="col-12 slidecontainer filterOptionMargin">
            <input type="range" min="18" max="50" value="20" className="slider" id="myRange"/>
            <input type="range" min="18" max="50" value="30" className="slider" id="myRange"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
