import React from 'react';
import './index.scss';
import './OurFirm.scss';
import './OurFirmPriv.scss';
import privateCapital from './images/shareholders-ltb.png';


const OurFirmPriv = () => {

  return (
    <div className="priv">
      <div className="priv-header">
        <h2 className="heading-primary">Private Capital</h2>
      </div>
      <div className="priv-text">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </div>
      <div className="priv-bottom-left">
        <div>
          <h2 className="heading-secondary-dk">
            Middlemarch as Advisor
          </h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div>
          <h2 className="heading-secondary-dk">
            Middlemarch as Activist Investor
          </h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="priv-bottom-right">
        <img src={privateCapital} className="priv-image" alt="Private Capital" />
      </div>

    </div>
  );
}

export default OurFirmPriv;