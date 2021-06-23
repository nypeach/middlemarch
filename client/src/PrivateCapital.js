import React from 'react';
import './MerchantBank.css';
import privateCapital from './images/shareholders-ltb.png';


const PrivateCapital = () => {

  return (
    <div className="row merch-bank-row">
      <div className="col-12 merch-bank-title">
        <h2 className="heading-primary-dk" style={{ margin: "-1rem 1rem 0 0" }}>Private Capital</h2>
        <p style={{ alignContent: "justify", marginTop: "1rem"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="col-6 merch-bank-left">
        <div className="merch-bank-left-div">
          <div className="col" style={{ width: "50%", marginTop: "30px" }}>
            <h2 className="heading-secondary-dk" style={{ marginBottom: "0px" }}>
              Middlemarch as Advisor
            </h2>
            <p style={{ alignContent: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="heading-secondary-dk" style={{ marginBottom: "0px" }}>
              Middlemarch as Activist Investor
            </h2>
            <p style={{ alignContent: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="col-6 merch-bank-right">
        <div className="merch-bank-left-div">

            <img src={privateCapital} class="image-fluid mx-auto d-block private-cap-circle" alt="Private Capital" style={{ maxWidth: "100%", maxHeight: "100%", padding: "10px" }} />

        </div>
      </div>

    </div >

  );
}

export default PrivateCapital;