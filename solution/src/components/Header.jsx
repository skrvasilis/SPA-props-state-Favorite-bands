import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between bg-dark">
          <h4 className="text-light head" >My favorite Bands</h4>
        <ul class="nav justify-content-end navbar-dark bg-dark p-2">
          <li class="nav-item">
            <button className="btn btn-primary m-2" onClick={()=>this.props.handleDisplay("bands")} >Bands</button>
          </li>
          <li class="nav-item">
            <button className="btn btn-primary m-2" onClick={()=>this.props.handleDisplay("form")}>Form</button>
          </li>
        </ul>
      </div>
    );
  }
}
