import './MerchantBank.css';


const MerchantBank = (props) => {


  return (

    <section id="merchant-bank" className="merchant-bank merchant-bank-section" >
      <div className="merchant-bank-main">
        <div className="merchant-bank-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>Merchant Bank</h2>
        </div>
        {/* ============================================================================ */}

        <button className="read-more-reverse" style={{ fontSize: "2rem" }} onClick={props.onClickOurFirm}>
          Return to Our Firm
        </button>
      </div>
    </section>
  )
}

export default MerchantBank;