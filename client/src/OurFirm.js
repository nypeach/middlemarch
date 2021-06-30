import React from 'react';
import OurFirmText from './OurFirmText';
import OurFirmTiles from './OurFirmTiles';
import './index.scss';
import './OurFirm.scss';

const OurFirm = () => {
return (
  <section className="section">
    <h2 className="heading heading-primary">Our Firm</h2>
    <OurFirmText />
    <OurFirmTiles />
  </section>
);
}

export default OurFirm;