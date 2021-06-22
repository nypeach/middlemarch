import React from 'react';
import './MerchantBank.css';
import merchantBank from './images/mm_merchantbank.png';

const MerchantBank = () => {

  return (
    <div className="row merch-bank-row">
      <div className="col-12 merch-bank-title">Title Column</div>

      <div className="col-6 merch-bank-left">
        <div className="merch-bank-left-div">Left Side</div>
      </div>

      <div className="col-6 merch-bank-right">
        <div className="merch-bank-right-div">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-3">
                One of two columns
                <img src={merchantBank} alt="Photo 1" className="composition__photo" />
              </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-3 ">
                One of two columns
                  <img src={merchantBank} alt="Photo 2" className="composition__photo" />
              </div>
              <div class="col-3">
                One of two columns
                  <img src={merchantBank} alt="Photo 3" className="composition__photo" />
              </div>
            </div>
          </div>
          {/* <div className="composition">
            <img src={merchantBank} alt="Photo 1" className="composition__photo composition__photo--p1" />
            <img src={merchantBank} alt="Photo 2" className="composition__photo composition__photo--p2" />
            <img src={merchantBank} alt="Photo 3" className="composition__photo composition__photo--p3" />
            <img src={merchantBank} alt="Photo 4" className="composition__photo composition__photo--p4" />
            <img src={merchantBank} alt="Photo 5" className="composition__photo composition__photo--p5" />
          </div> */}
        </div>
      </div>

    </div>

  );
}



export default MerchantBank;