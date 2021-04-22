import React from "react"
import "../styles/form.css"

const UploadForm = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <form
          name="Upload Form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <h6>Submit your blog below:</h6>
          <hr style={{ minWidth: `90%`, borderColor: "black", marginTop: 0 }} />
          <input type="hidden" name="form-name" value="Upload Form" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Name :{" "}
              <input minLength="3" maxLength="20" type="text" name="name" />{" "}
            </label>
          </p>
          <p>
            <label>
              E-mail : <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Title :{" "}
              <input minLength="10" maxLength="50" type="text" name="title" />
            </label>
          </p>
          <p>
            <label>
              Upload : <input type="file" name="Blog file" />
            </label>
          </p>
          <p>
            <button type="submit">Send your Blog</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default UploadForm
