import Image from 'react-bootstrap/Image';

const TransactionCard = (props) => {
  return (
    <div className="col">
      {console.log(props.name)}
      <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div className="mainflip">

          {/* CARD FRONT START */}
          <div className="frontside">
            <div className="card txn-card">
              <div className="txn-card-content">
                <div className="card-body text-center">
                  {/* <div className="txn-division"><h3>{props.division}</h3></div> */}
                  {props.image === '/static/media/logo.efdedb94.jpeg' ?
                    <div className="txn-nologo">
                      {props.name}
                      <h4 className="card-title">Amount Raised</h4>
                      <h4 className="txn-amount">$ {props.amount}</h4>
                    </div>
                    :
                    <div className= "txn-logo">
                    {/* <img className="img-fluid" src={props.image} alt={props.image} /> */}
                      <Image src={props.image} alt={props.image} style={{height: "75%"}} />
                      <h4 className="card-title">Amount Raised</h4>
                      <h4 className="txn-amount">$ {props.amount}</h4>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

          {/* CARD FRONT END / CARD BACK START */}
          <div className="backside">
            <div className="card txn-card">
              <div className="txn-card-content">
                <div className="card-body text-center mt-4">
                  {/* <div className="txn-nologo">
                  {props.industry}
                  {props.type}
                  $ {props.amount}
                  {props.date}
                </div> */}
                  <h4 className="card-title">{props.industry}</h4>
                  <h4 className="card-title">{props.type}</h4>
                  <h4 className="card-title">$ {props.amount}</h4>
                  <h4 className="card-title">{props.date}</h4>
                </div>
              </div>
            </div>
          </div>
          {/* CARD BACK END */}

        </div>
      </div>
    </div>
  )
}

export default TransactionCard;