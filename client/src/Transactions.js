import './Transactions.css';
import TransactionCard from './TransactionCard';
import { transactions } from './data/data.js';

const Transactions = () => {
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
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>
            <div><TransactionCard /></div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Transactions;