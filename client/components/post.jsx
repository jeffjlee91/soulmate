import React from 'react';

export default class UserUploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        message: '',
        userId: this.props.currentUser.userId,
        picture: 'images/imgplaceholder.png'
      },
      imageFile: ''
    };
  }

  fileSelectHandler(event) {
    this.setState({
      imageFile: event.target.files[0]
    });
  }

  uploadHandler() {
    const fd = new FormData();
    fd.append(
      'image',
      this.state.imageFile,
      this.state.imageFile.name.split('.').splice(1).join('')
    );
    const req = {
      method: 'POST',
      body: fd
    };
    fetch('/api/upload-image', req)
      .then(res => res.json())
      .then(result => {
        const post = { ...this.state.post };
        post.picture = result.split('/').slice(2).join('/');
        this.setState({ post });
      }).catch(err => alert('uploaderHandler error', err));
    event.preventDefault();
  }

  postHandler() {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.post)
    };
    fetch('/api/moments', req)
      .then(res => res.json())
      .then(newMoment => {
        this.props.setView('moments', this.props.currentUser);
      }).catch(err => alert('postHandler error', err));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container bg-bar pb-2">
        <div className="d-flex justify-content-left align-items-center">
          <i className="fas fa-angle-left fas-size p-2"
            onClick={() => this.props.setView('moments', this.props.currentUser)}></i>
        </div>

        <form onSubmit={this.uploadHandler.bind(this)}>
          <div className="form-group row">
            <img src={this.state.post.picture} className=" photo-size col-12" />
          </div>
          <div className="form-group row d-flex justify-content-center">
            <input
              type="file"
              className="btn btn-secondary col-8"
              onChange={this.fileSelectHandler.bind(this)}/>
            <button type="submit" name="upload" className="btn btn-primary btn-block col-3 ml-2">Upload</button>
          </div>
        </form>

        <form onSubmit={this.postHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="iAppreciate">What do you want to say now?</label>
            <textarea rows="8" className="form-control form-rounded input"
              name="message"
              placeholder="Add a caption or any words of inspiration or even what you had for lunch!"
              minLength='1'
              value={this.state.post.message}
              onChange={event => {
                const post = { ...this.state.post };
                post[event.target.name] = event.target.value;
                this.setState({ post });
              }}
              required />
            <div className="invalid-feedback">Cannot be empty!</div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary button col-8">Post</button>
            <button
              type="button"
              className="btn btn-secondary ml-3 button"
              onClick={() => this.props.setView('moments', this.props.currentUser)}>Back</button>
          </div>
        </form>

      </div>
    );
  }
}
