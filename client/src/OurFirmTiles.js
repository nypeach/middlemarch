import React, { useState, useRef, useEffect } from 'react';
import './OurFirm.css';
import privateCap from './images/ourFirm/private_capital-2-lt.png';
import merchantBank from './images/ourFirm/merchant_banking-3-lt.png';
import MerchantBank from './MerchantBank';
import PrivateCapital from './PrivateCapital';
import Card from 'react-bootstrap/Card';


const OurFirmTiles = (props) => {


  return (
    <div className="our-firm-tiles">
       <div className="card-group justify-content-center">
        <div className="card justify-content-center border-0" style={{ maxWidth: "35%", marginRight: "6px" }} onClick={props.onClickMerchBank}>
          <img src={merchantBank} className="card-img-top image-fluid mx-auto d-block" style={{ width: "35%", height: "10vw", objectFit: "contain" }}alt="Merchant Bank" />
          <div className="card-body">
            <h2 className="card-title heading-secondary-dk">Merchant Banking</h2>
            <p className="card-text" style={{ fontSize: "2.25rem" }}>The merchant banking model combines the capital raising and M&amp;A advisory services of an investment bank with the ability to invest like a private equity fund in client companies.&nbsp;&nbsp;<button className="read-more-link" style={{ fontSize: "2rem" }} onClick={props.onClickMerchBank }>Read More ...</button></p>
          </div>
        </div>
        <div className="card justify-content-center  border-0" style={{ maxWidth: "35%", marginLeft: "6px" }} onClick={props.onClickPrivCap}>
          <img src={privateCap} className="card-img-top image-fluid mx-auto d-block" style={{ width: "40%", height: "10vw", objectFit: "contain" }} alt="Private Capital" />
          <div className="card-body">
            <h2 className="card-title heading-secondary-dk">Private Capital</h2>
            <p className="card-text" style={{ fontSize: "2.25rem" }}>The principals of Middlemarch Capital Partners, the firm’s investment arm, can either co-invest alongside top-tier sponsors or lead investments.&nbsp;&nbsp;<button className="read-more-link" style={{ fontSize: "2rem" }} onClick={props.onClickPrivCap}>Read More ...</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFirmTiles;


