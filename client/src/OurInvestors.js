import './OurInvestors.css';
import logo from './images/logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const OurInvestors = (props) => {


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
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email   (We'll never share your email with anyone else.)" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button size="md" variant="primary" type="submit">
                SUBMIT
              </Button>
            </Form>
            <div className="investor-form-become" style={{marginTop: "4rem"}}>
              Become a Middlemarch Capital Partner
            </div>
            <Form className="investor-form-box">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First and Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email   (We'll never share your email with anyone else.)" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTelephone">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="text" placeholder="Telephone" />
              </Form.Group>

              <Button size="md" variant="primary" type="submit">
                SUBMIT
              </Button>
            </Form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default OurInvestors;