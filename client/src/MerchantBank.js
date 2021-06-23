import React from 'react';
import './MerchantBank.css';
import merchantBankAdvisor from './images/advisory-ltb.png';
import merchantBankInnovate from './images/broker-svc-ltb.png';
import merchantBankGrowth from './images/futures-contract-ltb.png';

const MerchantBank = () => {

  return (
    <div className="row merch-bank-row">
      <div className="col-12 merch-bank-title">Title Column</div>

      <div className="col-6 merch-bank-left">
        <div className="merch-bank-left-div">Left Side</div>
      </div>

      <div className="col-6 merch-bank-right">
        <div className="merch-bank-right-div">

          <div class="d-flex flex-row justify-content-center align-items-center bd-highlight h-50">
            <div className="border bd-highlight justify-content-center h-100">
              <div className="image-container justify-content-center align-items-center">
              <img src={merchantBankAdvisor} alt="Responsive 1" className="img-fluid mx-auto d-block justify-content-center image image-tall" />
              </div>
            </div>
          </div>

          <div class="d-flex flex-row justify-content-center align-items-center bd-highlight h-50">
            <div className="border bd-highlight flex-fill justify-content-center h-100">
              <img src={merchantBankInnovate} alt="Responsive 1" className="img-fluid mx-auto d-block justify-content-center image image-wide" />
            </div>
            <div className="border bd-highlight flex-fill justify-content-center h-100">
              <img src={merchantBankGrowth} alt="Responsive 1" className="img-fluid mx-auto d-block justify-content-center image image-wide" />
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}



export default MerchantBank;