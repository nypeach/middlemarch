import './OurInvestors.css';
import logo from './images/logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';

const mailgun = require("mailgun-js");
const DOMAIN = "sandbox0863dc47f5b74d81a9e982bdf84d5451.mailgun.org";
const mg = mailgun({ apiKey: "847d5f787736d65a31b5c10e7b787a7a-1831c31e-e3abb263", domain: DOMAIN });

const sendEmail = (mail) => {
  mg.messages().send(mail, function (error, body) {
    console.log(body);
    console.log('THIS FUNCTION EXECUTED', mail);
  });
}

const OurInvestors = (props) => {

  const [values, setValues] = useState({ name: '', email: '', phone: '', partnerName: '', partnerPwd: '' })
  const [showBecome, setShowBecome] = useState(false);
  const [showPartner, setShowPartner] = useState(false);
  // const recipients = ["jodimsilverman@gmail.com", "jodi@sbbsinc.com"];

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const data = {
    from: "Jodi Silverman <jodimsilverman@gmail.com>",
    to: "jodimsilverman@gmail.com",
    subject: "Someone Wants to Become a Middlemarch Capital Partner!",
    text: `NEW CAPITAL PARTNER REQUEST>> NAME: ${values.name} | EMAIL: ${values.email} | PHONE: ${values.phone}`,
    html: `<div style="font-size: 16px; font-family:verdana;"><div style="background-color:#1C2C55; margin-top: 16px; width: 300px; color:white;">NEW CAPITAL PARTNER REQUEST</div><div style="color:#1C2C55;"><strong>NAME: </strong>${values.name}</div><div style="color:#1C2C55;"><strong>EMAIL: </strong>${values.email}</div><div style="color:#1C2C55;"><strong>PHONE: </strong>${values.phone}</div> </div>`

  };

  return (

    <section id="investors" className="investors our-investors-section" >
      <div className="investors-main">
        <div className="investors-header">
          <h2 className="heading-primary-dk">Our Investors</h2>
        </div>
        {/* ============================================================================ */}
        <div className="investors-container">

          <div className="mm-logo"><img src={logo} alt="logo" className="mm-logo-box" /></div>
          <div className="investors-input-box">
            <div className="investor-form-heading" style={{ marginTop: "1.5rem" }}>
              Middlemarch Capital Partners Login
            </div>
            <Form className="investor-form-box">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: "1.5rem" }}>Email address</Form.Label>
                <Form.Control
                  name="partnerName"
                  value={values.partnerName}
                  type="email"
                  placeholder="Email   (We'll never share your email with anyone else.)"
                  onChange={handleInputChange}
                  style={{ fontSize: "1.5rem" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "1.5rem" }}>Password</Form.Label>
                <Form.Control
                  name="partnerPwd"
                  value={values.partnerPwd}
                  type="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  style={{ fontSize: "1.5rem" }}
                />
              </Form.Group>

              <Button
                size="md"
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPartner(true);
                  setValues({ name: '', email: '', phone: '', partnerName: '', partnerPwd: '' });
                }}
              >
                SUBMIT
              </Button>
            </Form>
            {/* =========== CONFIRMATION PARTNER LOGIN ============ */}
            {showPartner ?
              <Alert
                variant="danger"
                onClose={() => setShowPartner(false)}
                dismissible
              >
                <Alert.Heading>INVALID EMAIL OR PASSWORD!</Alert.Heading>
                <p>
                  Please contact Middlemarch Partners to reset your account.
                </p>
              </Alert>
              : null}
            {/* =========== CONFIRMATION PARTNER LOGIN ============ */}


            {/* =========== CONFIRMATION BECOME A PARTNER ============ */}
            {showBecome ?
              <Alert
                variant="success"
                onClose={() => setShowBecome(false)}
                dismissible
              >
                <Alert.Heading>THANK YOU!!</Alert.Heading>
                <p>
                  You have successfully sent your request!
                </p>
              </Alert>
              : null}
            {/* =========== CONFIRMATION BECOME A PARTNER ============ */}


            <div className="investor-form-become" style={{ marginTop: "2.5rem" }}>
              Become a Middlemarch Capital Partner
            </div>
            <Form className="investor-form-box">
              <Form.Group className="mb-3" controlId="investorName">
                <Form.Label style={{ fontSize: "1.5rem" }}>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={values.name}
                  type="text"
                  placeholder="Enter First and Last Name"
                  onChange={handleInputChange}
                  style={{ fontSize: "1.5rem" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="investorEmail">
                <Form.Label style={{ fontSize: "1.5rem" }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Email   (We'll never share your email with anyone else.)"
                  onChange={handleInputChange}
                  style={{ fontSize: "1.5rem" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="investorTelephone">
                <Form.Label style={{ fontSize: "1.5rem" }}>Telephone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={values.phone}
                  placeholder="Telephone"
                  onChange={handleInputChange}
                  style={{ fontSize: "1.5rem" }}
                />
              </Form.Group>

              <Button size="md" variant="primary" type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  sendEmail(data);
                  setShowBecome(true);
                  setValues({ name: '', email: '', phone: '', partnerName: '', partnerPwd: '' });
                }}>
                SUBMIT
              </Button>
            </Form>
          </div>

        </div>

      </div>
    </section >
  )
}

export default OurInvestors;