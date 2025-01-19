import { useEffect } from "react"
import "./Contact.css"

const Contact =()=> {
 
  
    return (
        <div className="contact-page">
        {/* Full-width header image */}
        <div className="contact-header">
          <img
            src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Us"
            className="contact-header-image"
          />
        </div>
      
        {/* Content Section */}
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us using the form below or through our contact details.</p>
        </div>
      
        {/* Contact Details */}
        <div className="contact-details">
          <div className="details">
            <h2>Our Address</h2>
            <p>Muzaffarabad, Multan, Pakistan</p>
            <p>Email: huzefahjaved@gmail.com</p>
            <p>phone: +923008035012</p>
            <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
      </a>
      <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/WhatsApp.svg" alt="WhatsApp" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
      </a>
    </div>
          </div>
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12509.517484055723!2d71.37041675402324!3d30.145244785346254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2s!4v1736441116220!5m2!1sen!2s" 
           allowfullscreen="" loading="lazy" 
           width="200px"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      
        {/* Contact Form */}
        <div className="contact-section">
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
      
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
      
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Write your message here..." required></textarea>
              </div>
      
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
    )
}

export default Contact;
