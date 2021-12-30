import './PrivateCapital.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import privCap from './images/ourFirm/private_capital_filled.png';


const PrivateCapital = (props) => {


  return (

    <section id="private-capital" className="private-capital private-capital-section" >
      <div className="private-capital-main">
        <div className="private-capital-header">
          <h2 className="heading-primary-dk">Private Capital</h2>
        </div>
        {/* ============================================================================ */}
        <Container fluid style={{ paddingLeft: "0", paddingRight:"0" }}>
          <Row style={{padding: "3rem", alignItems: "center"}}>
            <Col lg={6} className="private-capital-img-container">
            {/* <Image style={{maxWidth: "70%"}} src={privCap} /> */}
              <Image className="private-capital-image" src={privCap} />
              {/* <div className="img-all img-top"><div className="img-text">Merchant Bank Sourced Deals</div></div>
              <div className="img-all img-right"><div className="img-text">Deep Domain Expertise</div></div>
              <div className="img-all img-bottom"><div className="img-text">Active Advisor Orientation</div></div>
              <div className="img-all img-center"><div className="img-text">Middlemarch Capital Partners</div></div>
              <div className="img-all img-left"><div className="img-text">Co-Investor/ Lead Investor</div></div> */}
            </Col>
            <Col lg={6}>
              <div className="private-capital-text">The principals of Middlemarch Capital Partners, the firm’s investment arm, can either co-invest alongside top-tier sponsors in deals sourced as merchant bankers or lead investments in companies whose characteristics and capital needs are particularly well matched to Middlemarch’s skills and interests.</div>

              <div className="private-capital-text">Middlemarch Capital Partners invests its own principals’ capital and sources limited partner investment funding from family offices, institutional investors, private funds, and high net worth individuals.  These limited partners have come to trust the investment acumen of the Middlemarch team.</div>

              <div className="private-capital-text">The firm actively supports investments via board and advisory roles, assisting management teams as they drive growth and build shareholder value.</div>
            </Col>
          </Row>
        </Container>
        <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={props.onClickOurFirm}>
          Return to Our Firm
        </button>
      </div>
    </section>
  )
}

export default PrivateCapital;