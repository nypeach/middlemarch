import React from 'react';
import "./Navbar.css";

function Navbar () {
  return (
    <div className="pos-f-t">

      <nav className="navbar navbar-dark bg-dark flex-row-reverse">
        <div className="collapse" id="navbarToggleExternalContent">
          {/* <div className="bg-dark p-4">
            <h5 className="text-white h4 text-align-right">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div> */}
            <ul className='navbar-nav'>
              <li className='nav-item'>Home</li>
              <li className='nav-item'>Blarg</li>
              <li className='nav-item'>Next</li>
            </ul>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>


    </div>
  )
}
export default Navbar;