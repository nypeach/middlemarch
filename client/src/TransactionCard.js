const TransactionCard = (props) => {
  return (
    <div className="col">
      <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div className="mainflip">

          {/* CARD FRONT START */}
          <div className="frontside">
            <div className="card txn-card">
              <div className="card-body text-center">
                <div className="txn-division"><h3>{props.division}</h3></div>
                {props.image === '/static/media/logo.efdedb94.jpeg' ?
                  <div className="txn-nologo">{props.name}</div>
                  :
                  <img className="img-fluid" src={props.image} alt={props.image} />
                }
              </div>
            </div>
          </div>

          {/* CARD FRONT END / CARD BACK START */}
          <div className="backside">
            <div className="card txn-card">
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
          {/* CARD BACK END */}

        </div>
      </div>
    </div>
  )
}

export default TransactionCard;