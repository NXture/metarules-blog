import React from "react"
import "../styles/form.css"

const ContactForm = () => {
  return (
    <div style={{minWidth: "60%"}} className="form-container">
      <div className="form-content">
        <form
          name="Contact Form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <h6 style={{marginBottom: 0}}>Let's Talk <span role="img" aria-labelledby="hi">👋</span></h6>
          <span style={{marginTop: 0, fontSize: "small" }}>Leave us a message below.</span>
          <hr style={{ minWidth: `90%`, borderColor: "black", marginTop: 0 }} />
          <input type="hidden" name="form-name" value="Contact Form" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label for="name">
              Name :{" "}
              <input
                minLength="3"
                maxLength="20"
                type="text"
                name="name"
                required
              />{" "}
            </label>
          </p>
          <p>
            <label for="email">
              E-mail : <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label for="message">
              Message : <textarea wrap="soft" maxLength="100" minLength="10" rows="3"  name="message" required></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
