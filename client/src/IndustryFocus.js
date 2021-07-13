import React from 'react';
import './IndustryFocus.css';
import middlemarch from './images/icon_only-transparent.svg';
import txnprocess from './images/txn-processing-dkb.svg';
import fintech from './images/stock-screeners-dkb.svg';
import assetmgmt from './images/asset-mgmt-dkb.svg';
import specialtyfinance from './images/debt-resolution-dkb.svg';
import electroniccapital from './images/analytics-dkb.svg';
import businesssvc from './images/securities-mkt-dkb.svg';
import useToggle from './hooks/useToggle';

const IndustryFocus = () => {
  const [isHovered, isHoveredToggle] = useToggle(false);

  return (
    <div className="ind-focus">
      <div className="ind-focus-div">
        <h2 className="ind-focus-title">Industry Focus</h2>
        <div className="ind-focus-0">
          <img src={middlemarch} alt="middlemarch" />
        </div>
        <div className="ind-focus-1">
          {isHovered ? <div className="popover">Testing the Popover</div> : null}
          <button className="share_btn focus"><img className="focus-img" src={specialtyfinance} alt="specialty finance" /></button>
        </div>
        <div className="ind-focus-2">
          <button className="share_btn focus"><img className="focus-img" src={txnprocess} alt="transaction processing" /></button>
        </div>
        <div className="ind-focus-3">
          <button className="share_btn focus"><img className="focus-img" src={electroniccapital} alt="electronic cap" /></button>
        </div>
        <div className="ind-focus-4">
          <button className="share_btn focus"><img className="focus-img" src={businesssvc} alt="business services" style={{ width: "65%" }} /></button>
        </div>
        <div className="ind-focus-5">
          <button className="share_btn focus"><img className="focus-img" src={assetmgmt} alt="asset management" /></button>
        </div>
        <div className="ind-focus-6">
          <button className="share_btn focus"><img className="focus-img" src={fintech} alt="fin tech" /></button>
        </div>

      </div>
    </div>

  )

}

export default IndustryFocus;