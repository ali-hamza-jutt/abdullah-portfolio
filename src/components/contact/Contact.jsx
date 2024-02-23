import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Contact = () => {


  
  const phoneSvg=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{fill:'#ff004f',height:'22px',width:'22px', marginRight:'12px'}}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>;
  const envelopeSvg=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  style={{fill:'#ff004f',height:'22px',width:'22px', marginRight:'12px'}}><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>;
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Form submitted:', formData);
    };

    return (
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="name-input">
          <div className="first-name-input-container">
        <input className='first-name-input'
          type="text"
          id="firstName"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
          </div>

        <div className="last-name-input-container">
        <input className='last-name-input'
          type="text"
          id="lastName"
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        </div>
        </div>
        <div className="email-input">
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div className="message-input">
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder='Your Message'
          required
        ></textarea>
        </div>
        <button className='contact-submit-btn' type='submit'>Submit</button>
      </form>
    );
  };

  return (
    <div id='contact'>
      <div className="container">
            <h1 className="sub-title">Contact Me</h1>
        <div className="row">
          <div className="contact-left">
            <p>{phoneSvg}03247916471</p>
            <p>{envelopeSvg}abdullahahmad.319@gmail.com</p>
            <div classsName="social-icons">
              <a className='contact-social-link' href=""> <FontAwesomeIcon icon={faLinkedin} className='contact-social-icon' /></a>
              <a className='contact-social-link' href=""><FontAwesomeIcon icon={faFacebook} className='contact-social-icon' /></a>
              <a className='contact-social-link' href=""><FontAwesomeIcon icon={faInstagram} className='contact-social-icon' /></a>
              <a className='contact-social-link' href=""><FontAwesomeIcon icon={faXTwitter} className='contact-social-icon' /></a>
            </div>
          </div>
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
