import './Transactions.css';
import TransactionCard from './TransactionCard';
import { transactions } from './data/data.js';

function importAll(r) {
  let photos = {};
  r.keys().map(r).map(o =>
    photos[o.default.substring(14, o.default.indexOf('.')) + o.default.substring(o.default.lastIndexOf('.'))] = o.default
  )
  return photos;
}

const images = importAll(require.context('./images/transactions/', false, /\.(png|jpe?g|svg)$/))

const Transactions = () => {
  console.log(images)
  return (

    <section className="txn txn-section">
      <div className="txn-main">
        <div className="txn-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>TRANSACTIONS</h2>
        </div>
        {/* ============================================================================ */}
        <div className="txn-card-div">
          <div className="row gx-5 row-cols-auto justify-content-center">
            {/* TRANSACTION CARD START */}

            {transactions.sort((a, b) => (a.year > b.year) ? -1 : 1).map(txn =>
              <div>
                <TransactionCard
                  image={images[txn.Logo]}
                  name={txn.Name}
                  division={txn.Division}
                  industry={txn.Industry}
                  type={txn.Type}
                  amount={txn.Amount}
                  date={txn.Date}
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