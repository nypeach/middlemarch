import Button from 'react-bootstrap/Button';
import './Hamburger.css';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';



const Hamburger = (props) => {


  return (

    <>



      <Button variant="flat" size="xxl" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="navbar-toggler-icon" style={{ width: "100%" }}></span></Button>


      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "300px" }}>
        <div className="offcanvas-header">
          GO TO ...
          <i className="far fa-times-circle" onClick="{toggle}" data-bs-dismiss="offcanvas"></i>
          {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div className="offcanvas-body">
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickLanding()}>HOME</div>
          {/* <div id="offcanvasRightLabel" className="offcanvas-right-label">OUR FIRM</div> */}
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickOurFirm()}>OUR FIRM</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Merchant Banking</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Private Capital</div>
          {/* <Nav.Link href="#" onClick={() => onClickOurTeam()}>OUR TEAM</Nav.Link> */}
          <div id="offcanvasRightLabel" className="offcanvas-right-label" onClick={() => props.onClickOurTeam()}>OUR TEAM</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label">INDUSTRY FOCUS</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label">TRANSACTIONS</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label">NEWS, ARTICLES, EVENTS</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label">INVESTORS</div>
          <div id="offcanvasRightLabel" className="offcanvas-right-label">CONTACT US</div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;