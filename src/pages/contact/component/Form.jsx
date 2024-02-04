import React from 'react'

const FormContact = ({header, text}) => {

  return (
     <div className="form-container">
          <h2>{header}</h2>
          <p>
            {text}
          </p>
          <p className="asterisk"><span> * </span> marks a required field.</p>

          <form action="">
            <div className="form-element">
              <label for="name">Name:</label>
              <input type="text" required placeholder="Your Name" />
            </div>

            <div className="form-element">
              <label className="not-required" for="email">Email:</label>
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-element">
              <label for="number">Phone Number:</label>
              <input
                type="text"
                required
                oninput="this.value = this.value.replace(/[^0-9]/g,'')"
                placeholder="Your phone number"
              />
            </div>

            <div className="form-element">
              <label for="location">Location:</label>
              <input type="text" required placeholder="Your location" />
            </div>

            <div className="form-element message">
              <label for="message">Message:</label>
              <textarea required placeholder="Your Message"></textarea>
            </div>
          </form>
        </div> 
  )
}

export default FormContact
