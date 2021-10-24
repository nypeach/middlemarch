import React from 'react';
import './OurFirm.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import privateCap from './images/ourFirm/private_capital-2-lt.png';
import merchantBank from './images/ourFirm/merchant_banking-3-lt.png';

const OurFirm = (props) => {
  return (
    <section className="section-firm">
      <h2 className="heading-primary-dk">Our Firm</h2>
      <Container fluid style={{ padding: "0", margin: "0" }}>
        <Row>
          <Col sm={12}>
            <div className="our-firm-text">Middlemarch Partners is a merchant banking firm that provides the capital raising and M&amp;A advisory services of an investment bank and the investment capabilities of a private equity investor.</div>

            <div className="our-firm-text">Middlemarch focuses on financial services, business services, and impact investing. Its Partners have concentrated on these sectors for their entire careers in roles as investment bankers, private equity investors, and operating executives.</div>

            <div className="our-firm-text">The firm advises and invests across all stages of company growth, establishing long-term relationships that endure beyond the initial transaction.</div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Image className="our-firm-images" src={merchantBank} alt="Merchant Bank" onClick={props.onClickMerchBank} />
            <div><h2 className="heading-secondary-dk">Merchant Banking</h2></div>
            <p className="our-firm-merchPriv-text">
              The merchant banking model combines the capital raising and M&amp;A advisory services of an investment bank with the ability to invest like a private equity fund in client companies.&nbsp;&nbsp;
              <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={props.onClickMerchBank}>
                Read More ...
              </button>
            </p>
          </Col>
          <Col sm={6}>
            <Image className="our-firm-images" src={privateCap} alt="Merchant Bank" onClick={props.onClickPrivCap} />
            <div><h2 className="heading-secondary-dk">Private Capital</h2></div>
            <p className="our-firm-merchPriv-text">
              The principals of Middlemarch Capital Partners, the firm’s investment arm, can either co-invest alongside top-tier sponsors or lead investments.&nbsp;&nbsp;
              <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={props.onClickPrivCap}>
                Read More ...
              </button>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurFirm;