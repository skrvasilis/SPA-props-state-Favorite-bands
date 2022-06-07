import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="formContainer">
        <h2>Add a new band</h2>
        <form onSubmit={this.props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Band Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              onChange={this.props.handleInputs}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Greatest Hit</label>
            <input
              type="text"
              className="form-control"
              name="greatestHit"
              placeholder="Greatest Hit"
              onChange={this.props.handleInputs}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              name="genre"
              placeholder="Genre"
              onChange={this.props.handleInputs}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              className="form-control"
              type="text"
              name="image"
              placeholder="Image Url"
              onChange={this.props.handleInputs}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
