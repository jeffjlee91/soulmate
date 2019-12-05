import React from 'react';

export default class UserUploadPhoto extends React.Component {

  render() {
    return (
      <div className="container bg-color pb-2">
        <div className="d-flex justify-content-left align-items-center">
          <i className="fas fa-angle-left fas-size p-2"></i>
        </div>

        <form>
          <div className="form-group row">
            <img src="images/irene.jpg" className=" photo-size col-12" />
          </div>
          <div className="form-group row d-flex justify-content-center">
            <input type="file" className="btn btn-secondary col-8" />
            <button type="submit" name="upload" className="btn btn-primary btn-block col-3 ml-2">Upload</button>
          </div>
        </form>

        <form>
          <div className="form-group">
            <label htmlFor="iAppreciate">Please Add a Short Description</label>
            <textarea rows="4" className="form-control form-rounded input"
              placeholder="Add a caption or any words of inspiration or even what you had for lunch!"
              minLength='1'
              required />
            <div className="invalid-feedback">Cannot be empty!</div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary button col-8">Post</button>
            <button
              type="button"
              className="btn btn-secondary ml-3 button"
            >Back</button>
          </div>
        </form>
      </div>
    );
  }
}
