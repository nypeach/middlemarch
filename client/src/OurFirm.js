import React from 'react';
import OurFirmText from './OurFirmText';
import OurFirmTiles from './OurFirmTiles';
import './OurFirm.css';

const OurFirm = () => {
return (
  <section className="section-firm">
    <h2 className="heading-primary-dk">Our Firm</h2>
    <OurFirmText />
    <OurFirmTiles />
  </section>
);
}

export default OurFirm;