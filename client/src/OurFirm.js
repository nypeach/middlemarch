import React from 'react';
import OurFirmText from './OurFirmText';
import OurFirmTiles from './OurFirmTiles';
import './OurFirm.css';

const OurFirm = (props) => {
return (
  <section className="section-firm">
    <h2 className="heading-primary-dk">Our Firm</h2>
    {/* <p onClick={() => props.onClickMerchBank()}>TEST</p> */}
    <OurFirmText />
    <OurFirmTiles onClickMerchBank={() => props.onClickMerchBank()} onClickPrivCap={() => props.onClickPrivCap()}/>
  </section>
);
}

export default OurFirm;