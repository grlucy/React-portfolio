import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center text-md-left">
            <h3 class="sectionTitle">#contact</h3>
            <form
              class="mt-4 text-left"
              action="https://formspree.io/mgeygzdq"
              method="POST"
            >
              <div class="form-group">
                <label for="contactName">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="contactName"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="contactEmail">Email:</label>
                <input
                  type="email"
                  class="form-control"
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
              <div class="form-group">
                <label for="contactMessage">Message:</label>
                <textarea
                  class="form-control"
                  name="message"
                  id="contactMessage"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="contactBtn">
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
