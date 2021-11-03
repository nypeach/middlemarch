import { Modal} from 'react-bootstrap';
import './FinancialServices.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FinancialServicesPopover from './FinancialServicesPopover'

const FinancialServices = (props) => {
  return (
    <Modal
      scrollable={false}
      {...props}
      size="lg"
      aria-labelledby="Financial Services Modal"
      DialogClassName="modal-90w"
    >
      <i className="far fa-times-circle fa-3x finserv-modal-close" onClick={props.onHide}></i>
      <Modal.Header>
        <Modal.Title>
          <p className="finserv-modal-header">FINANCIAL SERVICES</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
       <Container fluid>
         <Row>
            <Col lg={6}>
              <FinancialServicesPopover />
              </Col>
            <Col lg={6} className="finserv-div">
              {/* <h2 className="heading-secondary-dk">Financial Services</h2> */}
              <div className="finserv-text">Middlemarch has deep domain expertise in financial services, where its principals have served as investment bankers, private equity investors, and fintech business operators for the last 30 years.</div>
            </Col>
         </Row>
       </Container>







      </Modal.Body>
    </Modal>
  );
}
export default FinancialServices;