import React, { useState } from 'react';
import './index.scss';
import './OurFirm.scss';
import './OurFirmMerch.scss';
import './Modal.scss';
import merchantBankAdvisor from './images/advisory-ltb.png';
import merchantBankInnovate from './images/broker-svc-ltb.png';
import merchantBankGrowth from './images/futures-contract-ltb.png';

const OurFirmMerch = () => {
  const [focus, setFocus] = useState('Innovate');

  const innovate =
    <div>
      <h2 className="heading-secondary-dk">
        Innovative Capital Solutions
      </h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>

  const growth =
    <div>
      <h2 className="heading-secondary-dk">
        High Growth Businesses
      </h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>

  const advisor =
    <div>
      <h2 className="heading-secondary-dk">
        Effective Client Partnership
      </h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>


  return (
    <div className="merch">
      <div className="merch-header">
        <h2 className="heading-primary">Merchant Banking</h2>
      </div>
      <div className="merch-text">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </div>
      <div className="merch-bottom-left">
        {focus === 'Innovate' ? innovate : focus === 'Growth' ? growth : focus === 'Advisor' ? advisor : null}
      </div>
      <div className="merch-bottom-right-1">
        <img src={merchantBankGrowth} className="image" alt="Merchant Bank Growth" onMouseEnter={() => setFocus('Growth')} onClick={() => setFocus('Growth')} />
      </div>
      <div className="merch-bottom-right-2">
        <img src={merchantBankAdvisor} className="image" alt="Merchant Bank Advisors" onMouseEnter={() => setFocus('Advisor')} onClick={() => setFocus('Advisor')} />
      </div>
      <div className="merch-bottom-right-3">
        <img src={merchantBankInnovate} className="image" alt="Merchant Bank Innovate" onMouseEnter={() => setFocus('Innovate')} onClick={() => setFocus('Innovate')} />
      </div>

    </div>



  );
}

export default OurFirmMerch;