import './PrivateCapital.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import privCapCustom from './images/ourFirm/private_capital_custom.svg';


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
            <Col xs={6}> <Image style={{width: "70%"}} src={privCapCustom} /></Col>
            <Col xs={6}>
              <div className="private-capital-text">The principals of Middlemarch Capital Partners, the firm’s investment arm, can either co-invest alongside top-tier sponsors in deals sourced as merchant bankers or lead investments in companies whose characteristics and capital needs are particularly well matched to Middlemarch’s skills and interests.</div>

              <div className="private-capital-text">Middlemarch Capital Partners invests its own principal’s capital and sources limited partner investment funding from family offices, institutional investors, private funds, and high net worth individuals who have come to trust the investment acumen of the Middlemarch team.</div>

              <div className="private-capital-text">The firm actively supports investments in board and advisory roles, assisting management teams as they drive growth and shareholder value.</div>

            </Col>
          </Row>
        </Container>

      </div>
    </section>
  )
}

export default PrivateCapital;