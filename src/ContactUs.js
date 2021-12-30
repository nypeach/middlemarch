import './ContactUs.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Backendless from 'backendless';

Backendless.initApp('3F6FD799-4DA3-DCEA-FFA6-A9D2380E0C00', 'F5CD099F-5472-4A4A-872E-D4432A045F68')

const bodyParts = new Backendless.Bodyparts()


const ContactUs = (props) => {

  const [values, setValues] = useState({ joinname: '', joinemail: '', joinphone: '' })
  const [showBecome, setShowBecome] = useState(false);
  const [showPartner, setShowPartner] = useState(false);
  // const recipients = ["jodimsilverman@gmail.com", "jodi@sbbsinc.com"];

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSuccess = status => {
    console.log('HTML email has been sent');
    setValues({ joinname: '', joinemail: '', joinphone: '' });
  }

  const onError = error => {
    console.error('Server reported an error: ', error.message)
    console.error('error code: ', error.code)
    console.error('http status: ', error.status)
  }

  const sendEmail = (subject, bodyParts, recipient) => {
    Backendless.Messaging.sendEmail(subject, bodyParts, [recipient])
      .then(onSuccess)
      .catch(onError)
  }

  const data =
   `<div style="font-size: 16px; font-family:verdana;"><div style="background-color:#1C2C55; margin-top: 16px; width: 300px; color:white;">NEW MAILING LIST REQUEST</div><div style="color:#1C2C55;"><strong>NAME: </strong>${values.joinname}</div><div style="color:#1C2C55;"><strong>EMAIL: </strong>${values.joinemail}</div><div style="color:#1C2C55;"><strong>PHONE: </strong>${values.joinphone}</div> </div>`;

  bodyParts.htmlmessage = data;

  const subject = 'Someone Wants to Be on the Middlemarch Mailing List!';
  const recipient = 'jodimsilverman@gmail.com';

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const mapWidth = viewportWidth > 1200 ? "300" : "200";
  const mapHeight = viewportWidth > 1200 ? "200" : "150";

  console.log('DATA >>>>>>', data);
  console.log('VALUES >>>>>', values)
  return (

    <section id="contactus" className="contact contact-section" >
      <div className="contact-main">
        <div className="contact-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>CONTACT US</h2>
        </div>
        {/* ============================================================================ */}

        <div className="contact-div">
          <div className="contact-container">
            <Container fluid className="g-0 align-items-stretch">
              <Row>

                <Col lg={4} className="contact-col g-0">
                  <div className="map1">
                    <h3 className="map1-header" >CONNECTICUT OFFICE</h3>
                    <div className="map1-text1">
                      700 Canal Street, Suite 148
                      <br></br>
                      Stamford, Connecticut 06902
                      <br></br>
                    </div>

                    <div className="map1-text2">
                      <i className="fas fa-envelope-square" style={{ cursor: "pointer" }} onClick={(e) => {
                        e.preventDefault();
                        window.open("mailto:info@middlemarchllc.com")
                      }}></i>&nbsp;&nbsp;&nbsp;&nbsp;<em>info@middlemarchllc.com</em>
                      <br></br>
                      <i className="fas fa-phone" >&nbsp;&nbsp;&nbsp;&nbsp;<em>212-913-9660</em></i>
                    </div>
                    <div className="gmap-div">
                      <iframe title="Connecticut Office" className="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.11358640147!2d-73.53422348482826!3d41.04464507929712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c29f61d87b8a65%3A0x6237354b63450802!2s700%20Canal%20St%2C%20Stamford%2C%20CT%2006902!5e0!3m2!1sen!2sus!4v1640475781399!5m2!1sen!2sus" width={mapWidth} height={mapHeight} frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy" />
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="contact-col g-0">
                  <div className="map1">
                    <h3 className="map1-header" >NEW YORK OFFICE</h3>
                    <div className="map1-text1">
                      125 Park Avenue, Suite 1700
                      <br></br>
                      New York, New York 10017
                      <br></br>
                    </div>

                    <div className="map1-text2">
                      <i className="fas fa-envelope-square" style={{ cursor: "pointer" }} onClick={(e) => {
                        e.preventDefault();
                        window.open("mailto:info@middlemarchllc.com")
                      }}></i>&nbsp;&nbsp;&nbsp;&nbsp;<em>info@middlemarchllc.com</em>
                      <br></br>
                      <i className="fas fa-phone">&nbsp;&nbsp;&nbsp;&nbsp;<strong><em>212-913-9660</em></strong></i>
                    </div>
                    <div className="gmap-div">
                      <iframe title="New York Office" className="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4681519309192!2d-73.97963938483831!3d40.751726979327614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259012bf7f7c7%3A0x391d930ce98ab3d0!2s125%20Park%20Ave%2C%20New%20York%2C%20NY%2010017!5e0!3m2!1sen!2sus!4v1640479027141!5m2!1sen!2sus" width={mapWidth} height={mapHeight} frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy" />
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="contact-col g-0 align-self-stretch">
                  <div className="mail-list">
                    <div className="contact-input-box">
                      <h3 className="map1-header" style={{ marginTop: "3rem" }} >JOIN OUR MAILING LIST</h3>

                      {/* =========== CONFIRMATION PARTNER LOGIN ============ */}
                      {showPartner ?
                        <Alert
                          style={{
                            position: "absolute",
                            left: "0%"
                          }}
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
                          style={{
                            position: "absolute",
                            left: "50%"
                          }}
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

                      <Form className="contact-form-box">
                        <Form.Group className="mb-5" controlId="joinName" style={{ marginTop: "-2rem" }}>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            name="joinname"
                            value={values.joinname}
                            type="text"
                            placeholder="Enter First and Last Name"
                            onChange={handleInputChange}
                            style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
                          />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="joinEmail">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="joinemail"
                            value={values.joinemail}
                            placeholder="Email"
                            onChange={handleInputChange}
                            style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
                          />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="joinTelephone">
                          <Form.Label>Telephone</Form.Label>
                          <Form.Control
                            type="text"
                            name="joinphone"
                            value={values.joinphone}
                            placeholder="Telephone"
                            onChange={handleInputChange}
                            className="contact-phone"
                          />
                        </Form.Group>

                        <Button size="md" variant="primary" type="submit" style={{ marginBottom: "2rem" }}
                          onClick={(e) => {
                            e.preventDefault();
                            sendEmail(subject, bodyParts, recipient);
                            setShowBecome(true);

                          }}>
                          SUBMIT
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Col>

              </Row>
              <div className="footer-top">&nbsp;</div>
              <Row className="g-0" style={{ margin: "0rem 3rem" }}>
                <div className="footer1" style={{ textAlign: "left", padding: "2rem 2.5rem 0rem 2rem" }}>
                  <div style={{ margin: "0rem 0rem 1rem 0rem" }}><em>Both Middlemarch Securities LLC and Middlemarch Capital Partners LLC are separate, wholly-owned subsidiaries of Middlemarch Partners LLC.  Securities Offered Through Middlemarch Securities, LLC, Member FINRA, SIPC.</em>
                  </div>
                  <div style={{ display: "inline", textDecoration: "underline" }}><a href="https://brokercheck.finra.org/firm/summary/283508"><em>BrokerCheck</em></a></div>
                  <div style={{ display: "inline" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                  <div style={{ display: "inline", textDecoration: "underline" }}>
                    <a href="https://files.brokercheck.finra.org/crs_283508.pdf"><em>FINRA Form CRS</em></a></div>
                  <div style={{ marginTop: "1rem" }}><em>Material on this website has been prepared as a matter of general information. Middlemarch and its affiliates, employees, and clients may have recently established or disposed of, or may be establishing or disposing of, positions in securities mentioned. (Middlemarch Securities, LLC 2017)</em></div>
                  <div className="copywright"><em>©  2022 Copyright Middlemarch Partners LLC. All Rights Reserved.</em></div>
                </div>
              </Row>
            </Container>







          </div>
        </div>









      </div>
    </section>
  )
}

export default ContactUs;