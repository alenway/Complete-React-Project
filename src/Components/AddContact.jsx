import React, { Component } from "react";

export default class AddContact extends Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="feild">
            <label>Name</label>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div className="feild">
            <label>Email</label>
            <input type="text" name="email" placeholder="email" />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
