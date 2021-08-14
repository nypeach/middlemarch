import './IndustryFocus.css';
import IndustryFocusBubbles from './IndustryFocusBubbles';

const IndustryFocus = () => {

  return (

    <section className="ind-focus ind-focus-section">
      <div className="ind-focus-main">
        <div className="ind-focus-header">
          <h2 className="heading-primary-dk">Industry Focus</h2>
        </div>

        {/* <div className="ind-focus"> */}
        {/* <div className="ind-focus-div"> */}
        {/* <h2 className="ind-focus-title">Industry Focus</h2> */}
        <div className="ind-focus-grid">
          <div className="ind-focus-left">
            <div className="ind-focus-left-text" style={{marginTop: "96px"}}>
              Middlemarch focuses on financial services and business services, where our Partners have spent their entire careers as investment bankers, investors, and operators.
            </div>
            <div className="ind-focus-left-text">
              Middlemarch believes the unique characteristics of the financial services sector require deep expertise to exploit growth opportunities and to minimize exposure to risk.
            </div>
          </div>
          <div className="ind-focus-bubble"><IndustryFocusBubbles /></div>
          <div className="ind-focus-right">
            <h2 className="heading-secondary-dk" style={{marginTop: "96px"}}>Financial Services Market Drivers</h2>
            <ul style={{marginTop: "-20px"}}>
              <li className="ind-focus-right-text">Evolving regulatory environment</li>
              <li className="ind-focus-right-text">Market dislocations and cyclicality</li>
              <li className="ind-focus-right-text">Technology and product innovation</li>
              <li className="ind-focus-right-text">Alternative service delivery and globalization</li>
              <li className="ind-focus-right-text">Unique capital structure needs</li>
            </ul>
            {/* <div className="ind-focus-right-text">&bull;&nbsp;&nbsp;Evolving regulatory environment</div>
            <div className="ind-focus-right-text">&bull;&nbsp;&nbsp;Market dislocations and cyclicality</div>
            <div className="ind-focus-right-text">&bull;&nbsp;&nbsp;Technology and product innovation</div>
            <div className="ind-focus-right-text">&bull;&nbsp;&nbsp;Alternative service delivery and globalization</div>
            <div className="ind-focus-right-text">&bull;&nbsp;&nbsp;Unique capital structure needs</div> */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default IndustryFocus;