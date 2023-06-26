import React from "react";

const Contact = () => {
  return (
    <div class="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" placeholder="Alberto Rio" required />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="alberto@bri.com" required />
          </div>

          <div>
            <label>Message</label>
            <input type="text" placeholder="Type your query here..." required />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
