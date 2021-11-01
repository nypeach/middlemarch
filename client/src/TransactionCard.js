import Image from 'react-bootstrap/Image';

const TransactionCard = (props) => {
  console.log(props.name)
  return (
    <div className="col">
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
                    <div className="txn-logo">
                      {/* <img className="img-fluid" src={props.image} alt={props.image} /> */}
                      <Image src={props.image} alt={props.image} />
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
                  <div className="card-back">
                    <div className="back-title">Type</div>
                    <div className="back-text">{props.type}</div>

                    {props.year !== '' ?
                      <div>
                        <div className="back-title">Year</div>
                        <div className="back-text">{props.year}</div>
                      </div>
                      :
                      null
                    }

                    <div className="back-title">Description</div>
                    <div className="back-text">{props.description}</div>
                    <div className="back-title">Investor</div>
                    <div className="back-text">{props.investor}</div>
                  </div>
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