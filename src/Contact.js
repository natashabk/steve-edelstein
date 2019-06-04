import React, { Component } from "react";
// import { Tabs, Tab } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div className="Home">
        <h3 className="about_heading_top">Getting in Touch</h3>
        <form name="contact" netlify>
  <p>
    <label>Your Name<input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email address<input type="email" name="email" /></label>
  </p>
  <p>
    <label>Subject<input type="text" name="subject" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </div>
    );
  }
}
