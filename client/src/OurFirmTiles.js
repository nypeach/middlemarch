import React from 'react';
import './OurFirm.css';
import useToggle from './hooks/useToggle';
import Modal from './Modal';

const OurFirmTiles = () => {

  return (
    <div className="our-firm-tiles">
      <div className="container">
        <div className="row">
          <div className="col-6">

            <div className="card" style={{width: "100%"}}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{fontSize: "3rem"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-6">

            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{ fontSize: "3rem" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFirmTiles;


