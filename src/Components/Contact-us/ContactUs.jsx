import React from 'react'
import "./Contact.css"
// import { Button } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactUs = () => {
    
  return (
    <section className='contact'>
    <div className="contact-layout">
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.293674794151!2d88.42368324985586!3d22.57635722182143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1712506236109!5m2!1sen!2sin" width={450} height={500} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
    
    <form action>
      <h3>Details</h3>
      <div className="inputBox">
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Phone No" />
      </div>
      <div className="inputBox">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
      </div>
      <textarea placeholder="Message" name id cols={27} rows={4} defaultValue={""} />
      <Button className='button'>Submit</Button>
    </form>
  </div>
  </section>
  )
}

export default ContactUs