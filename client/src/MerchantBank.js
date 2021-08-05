import React, { useState } from 'react';
import './MerchantBank.css';
import merchantBankAdvisor from './images/advisory-ltb.png';
import merchantBankInnovate from './images/broker-svc-ltb.png';
import merchantBankGrowth from './images/futures-contract-ltb.png';

const MerchantBank = () => {
  const [focus, setFocus] = useState('Innovate');

  const innovate =
    <div>
      <h2 className="heading-secondary-dk">
        Innovative Capital Solutions
      </h2>
      <p style={{ alignContent: "justify" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

  const growth =
    <div>
      <h2 className="heading-secondary-dk">
        High Growth Businesses
      </h2>
      <p style={{ alignContent: "justify" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

  const advisor =
    <div>
      <h2 className="heading-secondary-dk">
        Effective Client Partnership
      </h2>
      <p style={{ alignContent: "justify" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>


  return (

    <div className="row merch-bank-row">
      <div className="col-12 merch-bank-title">
        <h2 className="heading-primary-dk" style={{ margin: "1rem 0" }}>Merchant Banking</h2>
        <p style={{ alignContent: "justify", marginTop: "1rem"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="col-6 merch-bank-left">
        <div className="merch-bank-left-div">
          <div className="col" style={{ width: "50%" }}>
          {focus === 'Innovate' ? innovate : focus === 'Growth' ? growth : focus === 'Advisor' ? advisor : null}
          </div>
        </div>
      </div>

      <div className="col-6 merch-bank-right">
        <div className="merch-bank-right-div">
          <div><p className="merch-bank-click" style={{ textAlign: "center" }}>Click on an Image to Find Out More</p></div>
          <div className="image-containers-merch image2 image" onMouseEnter={() => setFocus('Advisor')} onClick={() => setFocus('Advisor')}>
            <img src={merchantBankAdvisor} class="image-fluid mx-auto d-block" alt="Merchant Bank Advisors" style={{ maxWidth: "100%", maxHeight: "100%", padding: "10px" }} />
          </div>
          <div className="image-containers-merch image1 image" onMouseEnter={() => setFocus('Growth')} onClick={() => setFocus('Growth')} >
            <img src={merchantBankGrowth} class="image-fluid mx-auto d-block" alt="Merchant Bank Advisors" style={{ maxWidth: "100%", maxHeight: "100%", padding: "10px" }} />
          </div>
          <div className="image-containers-merch image3 image" onMouseEnter={() => setFocus('Innovate')} onClick={() => setFocus('Innovate')}>
            <img src={merchantBankInnovate} class="image-fluid mx-auto d-block" alt="Merchant Bank Advisors" style={{ maxWidth: "100%", maxHeight: "100%", padding: "10px" }} />
          </div>
        </div>
      </div>

    </div >

  );
}

export default MerchantBank;