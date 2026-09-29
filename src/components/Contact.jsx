function Contact() {
  return (
    <section id="contact" className="section">

      <div className="section-title">
        <p>LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-container">

        <div className="contact-content">

          <h3>Have a project in mind?</h3>

          <p>
            I am always interested in learning new technologies,
            working on projects and exploring new opportunities.
          </p>

          <div className="contact-item">
            <div className="contact-icon">@</div>

            <div>
              <strong>Email</strong>
              <p>nilanjan@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">☎</div>

            <div>
              <strong>Phone</strong>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">⌖</div>

            <div>
              <strong>Location</strong>
              <p>India</p>
            </div>
          </div>

        </div>

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="button" className="btn primary-btn">
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;