import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-md-left">
            <h3 className="sectionTitle">#contact</h3>
            <form
              className="mt-4 text-left"
              action="https://formspree.io/mgeygzdq"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="contactName">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="contactName"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="_replyto"
                  id="contactEmail"
                  placeholder="Email"
                />
              </div>
              <input
                type="hidden"
                name="_subject"
                value="Message from ginalucy.com"
              />
              <div className="form-group">
                <label htmlFor="contactMessage">Message:</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="contactMessage"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="contactBtn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
