import React from 'react';
import "./Navbar.css";

function Navbar () {
  return (
    <div class="pos-f-t">

      <nav class="navbar navbar-dark bg-dark flex-row-reverse">
        <div class="collapse" id="navbarToggleExternalContent">
          {/* <div class="bg-dark p-4">
            <h5 class="text-white h4 text-align-right">Collapsed content</h5>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div> */}
            <ul className='navbar-nav'>
              <li className='nav-item'>Home</li>
              <li className='nav-item'>Blarg</li>
              <li className='nav-item'>Next</li>
            </ul>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>


    </div>
  )
}
export default Navbar;