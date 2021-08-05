const TransactionCard = (props) => {
  return (
        <div className="col">
      <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div className="mainflip">
          <div className="frontside">
            <div className="card txn-card">
              <div className="card-body text-center">
                <p><img className="img-fluid" src={props.txnimg} alt={props.txntitle} /></p>

              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card txn-card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">100 Dollars</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionCard;