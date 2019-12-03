import React from 'react';
import AgeSlider from './age-slider';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageValue: '',
      city: '',
      state: '',
      location: '',
      ethinicity: '',
      religion: '',
      ageMin: 18,
      ageMax: 40,
      heightMinFeet: 4,
      heightMinInch: 0,
      heightMaxFeet: 7,
      heightMaxInch: 11
    };
  }

  render() {
    return (
      <div className='container bg-color'>
        <nav className="bg-color fixed-top navbar d-flex justify-content-between align-items-center">
          <i className="fas fa-angle-left fas-size p-2"></i>
          <h3 className='paddingRight'>Filter</h3>
        </nav>

        <div className="form-group filterlist">
          <div className="form-group row filterLeftPadding">
            <div className="col-7">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control form-rounded input" id="city"
                name="city"
                placeholder="City"
                minLength='1'
                required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
            <div className="col-3">
              <label htmlFor="state">State</label>
              <input type="text" className="form-control form-rounded input" id="state"
                name="state"
                placeholder="CA"
                minLength='2'
                maxLength='2'
                required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
          </div>
          <div className="col-12 form-group">
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
          <div className="col-12 filterOptionMargin form-group">
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
          <div className="col-12 filterOptionMargin form-group">
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
            <label htmlFor="age">Age</label>
            <AgeSlider className='slider'/>
          </div>

          <div className='filterLeftPadding filterBotMargin'>Height</div>

          <div className="form-group row filterLeftPadding">
            <div className="col-4 filterOptionMargin form-group topMargin">
              <label htmlFor="Height"></label>
              <select className="custom-select input"
                name="Height"
                // value={this.state.minHeightFeet}
                // onChange={this.inputHandler}>
              >
                <option defaultValue>Feet</option>
                <option value='4'>4 ft</option>
                <option value="5">5 ft</option>
                <option value="6">6 ft</option>
                <option value="7">7 ft</option>
              </select>
            </div>
            <div className="col-4 filterOptionMargin topMargin form-group">
              <label htmlFor="Height"></label>
              <select className="custom-select input"
                name="Height"
                // value={this.state.newUser.ethnicity}
                // onChange={this.inputHandler}>
              >
                <option defaultValue>Inch</option>
                <option value="0">0 in</option>
                <option value="1">1 in</option>
                <option value="2">2 in</option>
                <option value="3">3 in</option>
                <option value="4">4 in</option>
                <option value="5">5 in</option>
                <option value="6">6 in</option>
                <option value="7">7 in</option>
                <option value="8">8 in</option>
                <option value="9">9 in</option>
                <option value="10">10 in</option>
                <option value="11">11 in</option>
              </select>
            </div>

            <div className='heightRangeTo'>To</div>

            <div className="col-4 filterOptionMargin form-group">
              <label htmlFor="Height"></label>
              <select className="custom-select input"
                name="Height"
                // value={this.state.newUser.ethnicity}
                // onChange={this.inputHandler}>
              >
                <option defaultValue>Feet</option>
                <option value='4'>4 ft</option>
                <option value="5">5 ft</option>
                <option value="6">6 ft</option>
                <option value="7">7 ft</option>
              </select>
            </div>
            <div className="col-4 filterOptionMargin form-group">
              <label htmlFor="Height"></label>
              <select className="custom-select input"
                name="Height"
                // value={this.state.newUser.ethnicity}
                // onChange={this.inputHandler}>
              >
                <option defaultValue>Inch</option>
                <option value="0">0 in</option>
                <option value="1">1 in</option>
                <option value="2">2 in</option>
                <option value="3">3 in</option>
                <option value="4">4 in</option>
                <option value="5">5 in</option>
                <option value="6">6 in</option>
                <option value="7">7 in</option>
                <option value="8">8 in</option>
                <option value="9">9 in</option>
                <option value="10">10 in</option>
                <option value="11">11 in</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-outline-secondary saveButton">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
