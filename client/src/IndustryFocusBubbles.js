import React, { useState } from 'react';
import './IndustryFocus.css';
import middlemarch from './images/icon_only-transparent.svg';
import txnprocess from './images/txn-processing-dkb.svg';
import fintech from './images/stock-screeners-dkb.svg';
import assetmgmt from './images/asset-mgmt-dkb.svg';
import specialtyfinance from './images/debt-resolution-dkb.svg';
import electroniccapital from './images/analytics-dkb.svg';
import businesssvc from './images/securities-mkt-dkb.svg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Popover.css';

const IndustryFocusBubbles = () => {
  const [focus1, setFocus1] = useState(false);
  const focus1Close = () => setFocus1(false);
  const focus1Show = () => setFocus1(true);
  const [focus2, setfocus2] = useState(false);
  const focus2Close = () => setfocus2(false);
  const focus2Show = () => setfocus2(true);
  const [focus3, setfocus3] = useState(false);
  const focus3Close = () => setfocus3(false);
  const focus3Show = () => setfocus3(true);
  const [focus4, setfocus4] = useState(false);
  const focus4Close = () => setfocus4(false);
  const focus4Show = () => setfocus4(true);
  const [focus5, setfocus5] = useState(false);
  const focus5Close = () => setfocus5(false);
  const focus5Show = () => setfocus5(true);
  const [focus6, setfocus6] = useState(false);
  const focus6Close = () => setfocus6(false);
  const focus6Show = () => setfocus6(true);

  return (
    <div className="ind-focus-div">
      <div className="ind-focus-0">
        <img src={middlemarch} alt="middlemarch" />
      </div>

      <div className="ind-focus-1">
        <button className="share_btn focus" onClick={focus1Show}>
          <img className="focus-img" src={specialtyfinance} alt="specialty finance" />
        </button>
        <Modal show={focus1} size="sm" onHide={focus1Close} style={{ top: "7%", left: "-15%" }}>
          <Modal.Header closeButton><h2 className="heading-secondary-dk" style={{ marginBottom: "0px", marginTop: "0px" }}>Specialty Finance</h2>
          </Modal.Header>
          <Modal.Body className="ind-focus-modal-text">1 to 2 sentences specifically about Specialty Finance.  Something small and to the point though.</Modal.Body>
        </Modal>
      </div>

      <div className="ind-focus-2">
        <button className="share_btn focus" onClick={focus2Show}>
          <img className="focus-img" src={txnprocess} alt="transaction processing" />
        </button>
        <Modal show={focus2} size="sm" onHide={focus2Close} style={{ top: "10%", left: "24%" }}>
          <Modal.Header closeButton>
            <h2 className="heading-secondary-dk" style={{ marginBottom: "0px", marginTop: "0px" }}>Transaction Processing</h2>
          </Modal.Header>
          <Modal.Body className="ind-focus-modal-text">1 to 2 sentences specifically about Transaction Processing.  Something small and to the point though.</Modal.Body>
        </Modal>
      </div>

      <div className="ind-focus-3">
        <button className="share_btn focus" onClick={focus3Show}>
          <img className="focus-img" src={electroniccapital} alt="electronic cap" />
        </button>
        <Modal show={focus3} size="sm" onHide={focus3Close} style={{ top: "70%", left: "26%" }}>
          <Modal.Header closeButton>
            <h2 className="heading-secondary-dk" style={{ marginBottom: "0px", marginTop: "0px" }}>Electronic Capital Markets</h2>
          </Modal.Header>
          <Modal.Body className="ind-focus-modal-text">1 to 2 sentences specifically about Electronic Capital Markets.  Something small and to the point though.</Modal.Body>
        </Modal>
      </div>

      <div className="ind-focus-4">
        <button className="share_btn focus" onClick={focus4Show}>
          <img className="focus-img" src={businesssvc} alt="business services" style={{ width: "65%" }} />
        </button>
        <Modal show={focus4} size="sm" onHide={focus4Close} style={{ top: "75%", left: "-15%" }}>
          <Modal.Header closeButton>
            <h2 className="heading-secondary-dk" style={{ marginBottom: "0px", marginTop: "0px" }}>Business Services</h2>
          </Modal.Header>
          <Modal.Body className="ind-focus-modal-text">1 to 2 sentences specifically about Business Services.  Something small and to the point though.</Modal.Body>
        </Modal>
      </div>

      <div className="ind-focus-5">
        <button className="share_btn focus" onClick={focus5Show}>
          <img className="focus-img" src={assetmgmt} alt="asset management" />
        </button>
        <Modal show={focus5} size="sm" onHide={focus5Close} style={{ top: "70%", left: "-27%" }}>
          <Modal.Header closeButton>
            <h2 className="heading-secondary-dk" style={{ marginBottom: "0px", marginTop: "0px" }}>Asset Management</h2>
          </Modal.Header>
          <Modal.Body className="ind-focus-modal-text">1 to 2 sentences specifically about Asset Management.  Something small and to the point though.</Modal.Body>
        </Modal>
      </div>

      <div className="ind-focus-6">
        <button className="share_btn focus" onClick={focus6Show}>
          <img className="focus-img" src={fintech} alt="fin tech" />
        </button>
        <Modal show={focus6} size="sm" onHide={focus6Close} style={{ top: "15%", left: "-25%" }}>
          <Modal.Header closeButton>
            <h2 className="heading-secondary-dk" style={{ marginBottom: "0px", marginTop: "0px" }}>Fin Tech</h2>
          </Modal.Header>
          <Modal.Body className="ind-focus-modal-text">1 to 2 sentences specifically about Fin Tech.  Something small and to the point though.</Modal.Body>
        </Modal>
      </div>

    </div>

  )

}

export default IndustryFocusBubbles;