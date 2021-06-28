import React from 'react';
import './Landing.scss';
import logo from './images/logo.png';
import mmpartners from './images/mmpartners-wb.png';

const Landing = () => {

  return (
    <header className="landing">
      <div className="landing-text-box">
        {/* <h1 className="landing-primary">
          <img src={logo} alt="logo" className="landing-logo-box" />
          <br></br>
          <img src={mmpartners} alt="logo" className="landing-logo" />
        </h1> */}
        <div className="landing-logo-box">
          <img src={logo} alt="logo" className="landing-logo" />
        </div>
        <h1 className="landing-primary"> MIDDLEMARCH</h1>
        <h2 className="landing-secondary">&mdash; PARTNERS &mdash;</h2>


        <p className="landing-tagline">Your tagline here, limit to this many characters</p>
      </div>
    </header>
  );
}



export default Landing;