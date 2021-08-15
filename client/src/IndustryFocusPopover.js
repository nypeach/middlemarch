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
import { OverlayTrigger, Popover, PopoverBody, PopoverHeader} from 'react-bootstrap';

const IndustryFocusPopover = () => {

  const focus1 = (
    <Popover id="focus1" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Specialty Finance</Popover.Header>
      <Popover.Body className="popover-text">
        1 to 2 sentences specifically about Specialty Finance.  Something small and to the point though.
      </Popover.Body>
    </Popover>
  );

  const focus2 = (
    <Popover id="focus2" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Transaction Processing</Popover.Header>
      <Popover.Body className="popover-text">
        1 to 2 sentences specifically about Transaction Processing.  Something small and to the point though.
      </Popover.Body>
    </Popover>
  );

  const focus3 = (
    <Popover id="focus3" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Electronic Capital Markets</Popover.Header>
      <Popover.Body className="popover-text">
        1 to 2 sentences specifically about Electronic Capital Markets.  Something small and to the point though.
      </Popover.Body>
    </Popover>
  );

  const focus4 = (
    <Popover id="focus4" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Business Services</Popover.Header>
      <Popover.Body className="popover-text">
        1 to 2 sentences specifically about Business Services.  Something small and to the point though.
      </Popover.Body>
    </Popover>
  );

  const focus5 = (
    <Popover id="focus5" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Asset Management</Popover.Header>
      <Popover.Body className="popover-text">
        1 to 2 sentences specifically about Asset Management.  Something small and to the point though.
      </Popover.Body>
    </Popover>
  );

  const focus6 = (
    <Popover id="focus6" className="popover-container">
      <Popover.Header as="h3" className="popover-header">Fin Tech</Popover.Header>
      <Popover.Body className="popover-text">
        1 to 2 sentences specifically about Fin Tech.  Something small and to the point though.
      </Popover.Body>
    </Popover>
  );
  return (
    <div className="ind-focus-div">
      <div className="ind-focus-0">
        <img src={middlemarch} alt="middlemarch" />
      </div>

      <div className="ind-focus-1">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus1}>
          <button className="share_btn focus">
            <img className="focus-img" src={specialtyfinance} alt="specialty finance" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="ind-focus-2">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus2}>
          <button className="share_btn focus">
            <img className="focus-img" src={txnprocess} alt="transaction processing" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="ind-focus-3">
        <OverlayTrigger trigger="hover" placement="right-end" overlay={focus3}>
          <button className="share_btn focus">
            <img className="focus-img" src={electroniccapital} alt="electronic cap" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="ind-focus-4">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus4}>
          <button className="share_btn focus">
            <img className="focus-img" src={businesssvc} alt="business services" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="ind-focus-5">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus5}>
          <button className="share_btn focus">
            <img className="focus-img" src={assetmgmt} alt="asset management" />
          </button>
        </OverlayTrigger>
      </div>

      <div className="ind-focus-6">
        <OverlayTrigger trigger="hover" placement="left-start" overlay={focus6}>
          <button className="share_btn focus">
            <img className="focus-img" src={fintech} alt="fin tech" />
          </button>
        </OverlayTrigger>
      </div>

    </div>

  )

}

export default IndustryFocusPopover;