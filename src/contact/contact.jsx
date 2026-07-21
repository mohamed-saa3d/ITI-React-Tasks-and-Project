import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">I'd love to hear from you. Send me a message!</p>
      </div>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="card contact-info">
          <h2 className="contact-section-title">Contact Information</h2>
          
          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-icon">@</div>
              <div>
                <h3 className="contact-item-title">Email</h3>
                <p className="contact-item-text">mohammedsaad.v7@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">#</div>
              <div>
                <h3 className="contact-item-title">Phone</h3>
                <p className="contact-item-text">+20 123 456 7890</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3 className="contact-item-title">Location</h3>
                <p className="contact-item-text">Egypt</p>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <button className="btn btn-outline btn-block">GitHub</button>
            <button className="btn btn-primary btn-block">LinkedIn</button>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="card contact-form-card">
          <h2 className="contact-section-title">Send a Message</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea rows="4" className="form-textarea" placeholder="How can I help you?"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-block form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
