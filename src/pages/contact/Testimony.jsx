import React from 'react';
const Testimony = () => {
  return (
    <div className="form-container">
      <h2>Testimony</h2>
      <p>
        When we testify, God is glorified! We invite you to register your
        testimonies with us. Whether it's a story of faith, personal
        transformation, or overcoming challenges, your testimony has the power
        to touch lives. By sharing your experiences, you can encourage and
        uplift others on their spiritual journey. Visit our testimonies
        registration page and let your story be a beacon of hope to those who
        need it. Your voice matters, and we look forward to hearing your
        inspiring testimony.
      </p>
      <p className="asterisk">
        <span> * </span> marks a required field.
      </p>

      <form
        action="https://formspree.io/f/xwkglrnl"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="form-element">
          <label for="name">Name:</label>
          <input type="text" name="name" required placeholder="Your Name" />
        </div>

        <div className="form-element">
          <label className="not-required" for="email">
            Email:
          </label>
          <input name="email" type="email" placeholder="Your Email" />
        </div>

        <div className="form-element">
          <label for="number">Phone Number:</label>
          <input
            type="text"
            name="phone number"
            required
            oninput="this.value = this.value.replace(/[^0-9]/g,'')"
            placeholder="Your phone number"
          />
        </div>

        <div className="form-element">
          <label for="location">Location:</label>
          <input
            type="text"
            name="location"
            required
            placeholder="Your location"
          />
        </div>
        <div className="form-element">
          <label for="location">Images</label>
          <input
            type="file"
            name="files[]"
            required
            placeholder="Your location"
          />
        </div>

        <div className="form-element message">
          <label for="message">Message:</label>
          <textarea
            required
            name="message"
            placeholder="Your Message"
            id="message"
          ></textarea>
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Testimony;
