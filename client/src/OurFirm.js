import React from 'react';
import OurFirmText from './OurFirmText';
import OurFirmTiles from './OurFirmTiles';
import './index.scss';
import './OurFirm.scss';

const OurFirm = () => {
return (
  <section className="section">
    <div className="our-firm-text">
      <h2 className="heading heading-primary">Our Firm</h2>
      <OurFirmText />
    </div>
    <OurFirmTiles />
  </section>
);
}

export default OurFirm;