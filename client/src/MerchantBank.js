import './MerchantBank.css';


const MerchantBank = (props) => {


  return (

    <section id="merchant-bank" className="merchant-bank merchant-bank-section" >
      <div className="merchant-bank-main">
        <div className="merchant-bank-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>Industry Focused Merchant Banking</h2>
        </div>
        {/* ============================================================================ */}

        <div className="merchant-bank-content">
          {/* <div className="paragraph">Middlemarch Partners focuses on industries that can sustain high-growth and generate high margins</div>

          The firm leverages the experience of its Principals who have served as advisors, investors, and operators in the sectors where Middlemarch Partners is active as a merchant bank */}
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