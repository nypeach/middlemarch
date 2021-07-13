import React from 'react';
import './OurFirm.css';
import useToggle from './hooks/useToggle';
import Modal from './Modal';
import privateCap from './images/angel-investors-ltb.png';
import merchantBank from './images/stock-exchange-ltb.png';
import MerchantBank from './MerchantBank';
import PrivateCapital from './PrivateCapital';

const OurFirmTiles = () => {
  const [isMerchOpen, isMerchOpenToggle] = useToggle(false);
  const [isPrivOpen, isPrivOpenToggle] = useToggle(false);
  // const merchModalContent = {
  //   'title': 'Merchant Banking',
  //   'text': 'Today is the first day of the rest of your life',
  //   '__html': '<p className="paragraph">Today is the first day of the rest of your life</p>'
  // }
  // const privModalContent = {
  //   'title': 'Private Capital',
  //   'text': 'Today is the first day of the rest of your life',
  //   '__html': '<p className="paragraph">Today is the first day of the rest of your life</p>'
  // }

  return (
    <div className="our-firm-tiles">
      {isMerchOpen ? <Modal isOpen={isMerchOpen} toggle={isMerchOpenToggle} modalComponent={<MerchantBank />} /> : null}
      {isPrivOpen ? <Modal isOpen={isPrivOpen} toggle={isPrivOpenToggle} modalComponent={<PrivateCapital />} /> : null}

      <div className="card-deck justify-content-center">
        <div className="card justify-content-center border-0" style={{ maxWidth: "35%" }} onClick={isMerchOpenToggle}>
          <img src={merchantBank} className="card-img-top image-fluid mx-auto d-block" style={{ width: "35%", height: "10vw", objectFit: "contain" }}alt="Merchant Bank" />
          <div className="card-body">
            <h2 className="card-title heading-secondary-dk">Merchant Banking</h2>
            <p className="card-text" style={{ fontSize: "2.25rem" }}>The merchant banking model combines the capital raising and M&amp;A advisory services of an investment bank with the ability to invest like a private equity fund in client companies.&nbsp;&nbsp;<button className="read-more-link" style={{ fontSize: "2rem" }} onClick={isMerchOpenToggle}>Read More ...</button></p>
          </div>
        </div>
        <div className="card justify-content-center  border-0" style={{ maxWidth: "35%" }} onClick={isPrivOpenToggle}>
          <img src={privateCap} className="card-img-top image-fluid mx-auto d-block" style={{ width: "40%", height: "10vw", objectFit: "contain" }} alt="Private Capital" />
          <div className="card-body">
            <h2 className="card-title heading-secondary-dk">Private Capital</h2>
            <p className="card-text" style={{ fontSize: "2.25rem" }}>The principals of Middlemarch Capital Partners, the firm’s investment arm, can either co-invest alongside top-tier sponsors or lead investments.&nbsp;&nbsp;<button className="read-more-link" style={{ fontSize: "2rem" }} onClick={isPrivOpenToggle}>Read More ...</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFirmTiles;


