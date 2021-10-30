import './MerchantBank.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import finServices from './images/merchBank/fintech-2-lt.png';
import busServices from './images/merchBank/business_svc-lt.png';
import impInvesting from './images/merchBank/impact_investing-lt.png';


const MerchantBank = (props) => {


  return (

    <section id="merchant-bank" className="merchant-bank merchant-bank-section" >
      <div className="merchant-bank-main">
        <div className="merchant-bank-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>Industry Focused Merchant Banking</h2>
        </div>
        {/* ============================================================================ */}

        <div className="merchant-bank-content">
          <Container fluid className="mb-container">
            <Row className="mb-row">
              <Col sm={12}>
                <div className="mb-text-1">
                  Middlemarch Partners focuses on industries that can sustain high-growth and generate high margins.
                  The firm leverages the experience of its Principals who have served as advisors, investors, and operators in the sectors where Middlemarch Partners is active as a merchant bank</div>
              </Col>
            </Row>
            <Row className="mb-row mb-override">

              <Col sm={6} className="mb-col">
                <Row className="mb-col-row">
                  <div><h2 className="mb-heading-1">Industry Focus</h2></div>
                  <div>
                    <Image className="mb-images-1" src={finServices} alt="Financial Services" onClick='{props.onClickMerchBank}' />
                  </div>
                  <div><h2 className="mb-heading-2">Financial Services</h2></div>
                  <div className="mb-text-2">
                    Technology-Enabled Financial Services and Related Software Businesses
                  </div>
                </Row>
                <Row className="mb-col-row">
                  <div>
                    <Image className="mb-images-2" src={busServices} alt="Business Services" onClick='{props.onClickMerchBank}' />
                  </div>
                  <div><h2 className="mb-heading-2">Business Services</h2></div>
                  <div className="mb-text-2">
                    Business Services that Exploit Technology, Outsourcing, and Innovative Business Models
                  </div>
                </Row>
                <Row className="mb-col-row">
                  <div>
                    <Image className="mb-images-3" src={impInvesting} alt="Impact Investing" onClick='{props.onClickMerchBank}' />
                  </div>
                  <div><h2 className="mb-heading-2">Impact Investing</h2></div>
                  <div className="mb-text-2">
                    High-Growth, High-Profit Margin Businesses that Support Positive Environmental, Social, and Governance Ojectives
                  </div>
                </Row>
              </Col>




              <Col sm={6} className="mb-col">
                <Row className="mb-col-row">
                  <div><h2 className="mb-heading-1">Merchant Banking Services</h2></div>
                  <ul className="no-bullets">
                    <li className="mb-li">
                      <h2 className="mb-heading-3"><i class ="far fa-check-square"></i> &nbsp; Equity Capital Raises</h2>
                    </li>
                    <li className="mb-li">
                      <h2 className="mb-heading-3"><i class ="far fa-check-square"></i> &nbsp; Debt Capital Raises</h2>
                    </li>
                    <li className="mb-li">
                      <h2 className="mb-heading-3"><i class ="far fa-check-square"></i> &nbsp; Structured Security Issuance</h2>
                    </li>
                    <li className="mb-li">
                      <h2 className="mb-heading-3"><i class ="far fa-check-square"></i> &nbsp; Buyouts and Recapitalizations</h2>
                    </li>
                    <li className="mb-li">
                      <h2 className="mb-heading-3"><i class ="far fa-check-square"></i> &nbsp; M &amp; A Advisory</h2>
                    </li>
                    <li className="mb-li">
                      <h2 className="mb-heading-3"><i class ="far fa-check-square"></i> &nbsp; Private Capital Investment</h2>
                    </li>
                  </ul>
                </Row>
              </Col>


            </Row>
          </Container>
        </div>





        {/* ============================================================================ */}
        <button className="read-more-reverse" style={{ fontSize: "2rem" }} onClick={props.onClickOurFirm}>
          Return to Our Firm
        </button>
      </div>
    </section>
  )
}

export default MerchantBank;