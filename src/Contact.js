import React, { Component } from "react";
import NetlifyForm from 'react-netlify-form'

export default class Contact extends Component {
  render() {
    return (
      <div className="Home">
        <h3 className="about_heading_top">Getting in Touch</h3>
        <NetlifyForm name="contact">
        {({ loading, error, success }) => (
          <div>
          {loading &&
            <div>Loading...</div>
          }
          {error &&
            <div>Your information was not sent. Please try again later.</div>
          }
          {success &&
            <div>Thank you for contacting us!</div>
          }
          {!loading && !success &&
            <div>
              <input type='text' name='Name' required />
              <textarea name='Message' required />
              <button>Submit</button>
            </div>
          }
        </div>
      )}

</NetlifyForm>

      </div>
    );
  }
}
