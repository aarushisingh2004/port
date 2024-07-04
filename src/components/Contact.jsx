import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactImg from "../assets/img/contact-img.svg";
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm('service_gpf7lqo', 'template_erwxw0k', form.current, 'c--9uqznT3dpXOkd7')
    .then(
        (result) => {
          setButtonText("Send");
          setStatus({ success: true, message: 'Message sent successfully' });
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: '#333333',
              color: '#D8BFD8'
            }
          });
        },
        (error) => {
          setButtonText("Send");
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
          toast.error('Something went wrong, please try again later.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: '#333333',
              color: '#D8BFD8'
            }
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="from_name"
                    placeholder=" Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  {/* <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  /> */}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email Address"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Message"
                  />
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Contact;
