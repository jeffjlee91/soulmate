import React from 'react';

export default class NewUser extends React.Component {
  render() {
    return (
      <div className="container bg-color pb-2">
        <div className="d-flex justify-content-left align-items-center">
          <i className="fas fa-angle-left fas-size p-2"></i>
        </div>
        <form>
          <div className="form-group row">
            <img src="/images/Sarah.png" className="photo-size col-12" />
          </div>

          <div className="form-group btn btn-secondary btn-rounded">
            <input type="file" placeholder='dfd'/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control form-rounded input" id="email"
              placeholder="email" minLength='1' required/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control form-rounded input" id="password"
              placeholder="password" minLength='8' required />
            <div className="invalid-feedback">At least 8 characters!</div>
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control form-rounded input" id="firstName"
                placeholder="First name" minLength='1' required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
            <div className="col-6">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control form-rounded input" id="lastName"
                placeholder="Lirst name" minLength='1' required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-8">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control form-rounded input" id="city"
                placeholder="City" minLength='1' required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
            <div className="col-4">
              <label htmlFor="State">State</label>
              <input type="text" className="form-control form-rounded input" id="State"
                placeholder="CA" minLength='2' maxLength='2' required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="age">Age</label>
              <input type="number" className="form-control form-rounded input" id="age"
                placeholder="Age" minLength='1' maxLength='2' required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
            <div className="col-6">
              <label htmlFor="height">Height</label>
              <input type="text" className="form-control form-rounded input" id="height"
                placeholder="5&apos;11&quot;" minLength='1' required />
              <div className="invalid-feedback">Cannot be empty!</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" className="form-control form-rounded input" id="jobTitle"
              placeholder="Job Title" minLength='1' required />
            <div className="invalid-feedback">Cannot be empty!</div>
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="ethnicity">Ethnicity</label>
              <select id="ethinicity" className="custom-select input">
                <option defaultValue>Choose...</option>
                <option value="Asian">Asian</option>
                <option value="Caucasian">Caucasian</option>
                <option value="Latino">Latino</option>
                <option value="Black">Black</option>
                <option value="Middle Eastern">Middle Eastern</option>
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="religion">Religion</label>
              <select id="religion" className="custom-select input">
                <option defaultValue>Choose...</option>
                <option value="Christian">Christian</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Catolic">Catolic</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="None">None</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="iAm">I am...</label>
            <textarea rows="2" className="form-control form-rounded input" id="iAm"
              placeholder="One sentence about yourself" minLength='1' required />
            <div className="invalid-feedback">Cannot be empty!</div>
          </div>

          <div className="form-group">
            <label htmlFor="iLike">I like...</label>
            <textarea rows="4" className="form-control form-rounded input" id="iLike"
              placeholder="More description for yourself, let other users know more about you" minLength='1' required />
            <div className="invalid-feedback">Cannot be empty!</div>
          </div>

          <div className="form-group">
            <label htmlFor="iAppreciate">I appreciate my soulmate...</label>
            <textarea rows="4" className="form-control form-rounded input" id="iAppreciate"
              placeholder="More description about your ideal other half, like what your soulmate should looks like" minLength='1' required />
            <div className="invalid-feedback">Cannot be empty!</div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary button">Create</button>
            <button type="button" className="btn btn-secondary ml-5 button">Back</button>
          </div>
        </form>
      </div>
    );
  }
}
