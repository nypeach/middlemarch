import { Modal} from 'react-bootstrap';
import './MerchantBank.css';

const BusinessServices = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
    >
      <i className="far fa-times-circle fa-3x mb-modal-close" onClick={props.onHide}></i>
      <Modal.Header>
        <Modal.Title>
          <p className="mb-modal-header"> Business Services</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Centered Modal</h4>
        <p className="mb-modal">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}
export default BusinessServices;