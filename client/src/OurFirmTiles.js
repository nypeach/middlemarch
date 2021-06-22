import React from 'react';
import './OurFirm.css';
import useToggle from './hooks/useToggle';
import Modal from './Modal';
import privateCap from './images/mm_private_capital.png';
import merchantBank from './images/mm_merchantbank.png';
import MerchantBank from './MerchantBank';

const OurFirmTiles = () => {
  const [isMerchOpen, isMerchOpenToggle] = useToggle(false);
  const [isPrivOpen, isPrivOpenToggle] = useToggle(false);
  const merchModalContent = {
    'title': 'Merchant Banking',
    'text': 'Today is the first day of the rest of your life',
    '__html': '<p className="paragraph">Today is the first day of the rest of your life</p>'
  }
  const privModalContent = {
    'title': 'Private Capital',
    'text': 'Today is the first day of the rest of your life',
    '__html': '<p className="paragraph">Today is the first day of the rest of your life</p>'
  }

  return (
    <div className="our-firm-tiles">
      {isMerchOpen ? <Modal isOpen={isMerchOpen} toggle={isMerchOpenToggle} modalComponent={<MerchantBank />} /> : null}
      {isPrivOpen ? <Modal isOpen={isPrivOpen} toggle={isPrivOpenToggle} modalComponent={<MerchantBank />} /> : null}
      <div className="container">
        <div className="row">
          <div className="col-6">

            <div className="card our-firm-tiles-card justify-content-center overflow-auto border-0" style={{ width: "100%" }} onClick={isMerchOpenToggle}>
              <img src={privateCap} className="card-img-top our-firm-tiles-img" alt="Private Capital" />
              <div className="card-body">
                <h2 className="heading-secondary-dk">Merchant Banking</h2>
                <p className="card-text" style={{ fontSize: "2.25rem" }}>The merchant banking model combines the capital raising and M&amp;A advisory services of an investment bank with the ability to invest like a private equity fund in client companies.&nbsp;&nbsp;<button className="read-more-link" style={{ fontSize: "2rem" }} onClick={isMerchOpenToggle}>Read More ...</button></p>
              </div>
            </div>
          </div>
          <div className="col-6">

            <div className="card our-firm-tiles-card justify-content-center overflow-auto border-0" style={{ width: "100%" }} onClick={isPrivOpenToggle}>
              <img src={merchantBank} className="card-img-top our-firm-tiles-img" alt="Merchant Banking" />
              <div className="card-body">
                <h2 className="heading-secondary-dk">Private Capital</h2>
                <p className="card-text" style={{ fontSize: "2.25rem" }}>The principals of Middlemarch Capital Partners, the firm’s investment arm, can either co-invest alongside top-tier sponsors or lead investments.&nbsp;&nbsp;<button className="read-more-link" style={{ fontSize: "2rem" }} onClick={isPrivOpenToggle}>Read More ...</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFirmTiles;


