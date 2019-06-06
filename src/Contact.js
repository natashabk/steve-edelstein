import React, { Component } from "react";
import NetlifyForm from "react-netlify-form";
import { Row, Col } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div className="Home">
        <h3 className="about_heading_top" id="contact">Getting in Touch</h3>
        <div id="formWrapper">
          <Row>
            <Col xs={12} md={6}>
            <NetlifyForm name="contact">
              {({ loading, error, success }) => (
                <div>
                  {loading && <div>Loading...</div>}
                  {error && (
                    <div>
                      Your information was not sent. Please try again later.
                    </div>
                  )}
                  {success && <div>Thank you for contacting us!</div>}
                  {!loading && !success && (
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                      <input
                        type="text"
                        name="subject"
                        readOnly="New Inquiry from Edelstein Photography!"
                        hidden
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                      />
                      <textarea
                        name="message"
                        placeholder="Enter your message"
                        required
                        rows={4}
                      />
                      <button id="submit">SUBMIT</button>
                    </div>
                  )}
                </div>
              )}
            </NetlifyForm>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    );
  }
}
