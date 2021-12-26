import React from 'react';
import './Footer.css';


const Footer = () => {

  return (

    <div className="mt-5 pt-5 pb-5 footer">

        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
          <p className="pr-5 text-white-50">Both Middlemarch Securities LLC and Middlemarch Capital Partners LLC are separate, wholly-owned subsidiaries of Middlemarch Partners LLC.  Securities Offered Through Middlemarch Securities, LLC, Member FINRA, SIPC</p>
          <div><a href="https://brokercheck.finra.org/firm/summary/283508">BrokerCheck</a></div>
          <div><a href="https://files.brokercheck.finra.org/crs_283508.pdf">FINRA Form CRS</a></div>
           </div>
          <div className="col-lg-4 col-xs-12 location">
            <p>Material on this website has been prepared as a matter of general information. Middlemarch and its affiliates, employees, and clients may have recently established or disposed of, or may be establishing or disposing of, positions in securities mentioned. (Middlemarch Securities, LLC 2017)</p>

          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
          <p className=""><small className="text-white-50">©  2021 Copyright Middlemarch Partners LLC. All Rights Reserved.</small></p>
          </div>
        </div>

    </div>


  );
}



export default Footer;





