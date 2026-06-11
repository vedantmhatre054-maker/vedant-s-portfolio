function Contact() {
  return (
    <div className="page">

      <h1>Contact</h1>

      <div className="contact-cards">

        <div className="contact-card">
          <h3>Email</h3>
          <p>vedantmhatre054@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <p>github.com/vedantmhatre054-maker</p>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p>Your LinkedIn Profile</p>
        </div>

      </div>

      <div className="contact-divider"></div>

      <h2 className="connect-title">Let's Connect</h2>

      <p className="contact-description">
        Interested in working together, discussing technology,
        software development, or exciting opportunities?
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="8"
          placeholder="Tell me about your project..."
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;