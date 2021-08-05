import Button from 'react-bootstrap/Button';
import './Hamburger.css';



const Hamburger = (props) => {


  return (
    <>
      <Button variant="flat" size="xxl" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="navbar-toggler-icon" style={{width: "100%"}}></span></Button>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
        </div>
      </div>
    </>
  );
}

export default Hamburger;