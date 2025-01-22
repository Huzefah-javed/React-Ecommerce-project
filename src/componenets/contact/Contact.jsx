import { useEffect, useState } from "react"
import "./Contact.css"

const Contact =()=> {
 
const [formData, setFormData] = useState({
  name : "",
  email: "",
  message : ""
})
const [formSubmit, setFormSubmit] = useState(false);

const handleFormData =(e)=> {
  setFormSubmit(false)
  const value = e.target.value
  const name = e.target.name 
    setFormData((prev)=>({...prev, [name]: value}))
    
}


const handleFormSubmit =(e)=> {
  e.preventDefault()
  console.log(formData)
  setFormData({
    name : "",
    email: "",
    message : ""
  })
  setFormSubmit(true)
}

    return (
        <div className="contact-page">
        {/* Full-width header image */}
        <div className="contact-header">
        <iframe src="https://www.google.com/maps?q=30.1423,71.3692&hl=en&z=15&output=embed" 
                className="contact-header-map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            <p>phone: +923297207977</p>
         <div className="social-icons">
      <a href="https://web.facebook.com/Huzefah.javed.775823" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
      </a>
      <a href="https://github.com/Huzefah-javed" target="_blank" rel="noopener noreferrer" className="social-icon">
       <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
      </a>

      <a href="https://www.instagram.com/i_m_huzefah_javed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
      </a>
    </div>
          </div>
      
        {/* Contact Form */}
        <div className="contact-section">
          <div className="contact-form">
            <form onSubmit={(e)=>handleFormSubmit(e)}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" required  value={formData.name} onChange={(e)=>handleFormData(e)}/>
              </div>
      
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Your Email" required value={formData.email} onChange={(e)=>handleFormData(e)}/>
              </div>
      
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Write your message here..." required value={formData.message} onChange={(e)=>handleFormData(e)}></textarea>
              </div>
              {formSubmit? (<h5>Message Sent successfully</h5>): ""}      
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
                </div>
      
    )
}

export default Contact;
