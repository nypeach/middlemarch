import './Transactions.css';
import TransactionCard from './TransactionCard';
import { transactions } from './data/transactions.js';

function importAll(r) {
  let photos = {};
  r.keys().map(r).map(o =>
    photos[o.default.substring(14, o.default.indexOf('.')) + o.default.substring(o.default.lastIndexOf('.'))] = o.default
  )
  return photos;
}

const images = importAll(require.context('./images/transactions/', false, /\.(png|jpe?g|svg)$/))

const Transactions = () => {
  // console.log(images)
  return (

    <section className="txn txn-section">
      <div className="txn-main">
        <div className="txn-header">
          <h2 className="heading-primary-dk">TRANSACTIONS</h2>
        </div>
        {/* ============================================================================ */}
        <div className="txn-card-div">
          <div className="row gx-5 row-cols-auto justify-content-center">
            {/* TRANSACTION CARD START */}

            {transactions.sort((a, b) => (a.Order > b.Order) ? 1 : -1).map(txn =>
              <div key={txn.Order}>
                <TransactionCard

                  image={images[txn.Logo]}
                  name={txn.Name}
                  description={txn.Description}
                  investor={txn.Investor}
                  type={txn.Type}
                  amount={txn.Amount}
                  year={txn.Year}
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Transactions;