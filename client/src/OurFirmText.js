import React, {useState} from 'react';
import './OurFirm.scss';
import useToggle from './hooks/useToggle';

const OurFirmText = () => {
  const [isOpen, isOpenToggle] = useToggle(false);


  const p2 = <>
    <div className="paragraph">
      Middlemarch Partners combines the advisory services of an investment bank with the investment discipline of a private equity firm to bring sector-specific insight, guidance, and capital to these enterprises without diverting management’s attention from growth.
    </div>
    <div data-testid="ReadMoreText" className="paragraph">
      Middlemarch focuses on developing deep relationships with its partner companies. In order to best represent its clients to the investor community, Middlemarch takes the time to fundamentally understand its clients’ businesses. The firm seeks to work closely with and invest in companies that are committed to long-term sustainable success.<div></div>
      <button className="read-more-link" onClick={() => isOpenToggle()}>Read Less ...</button>
    </div>
  </>

return (
  <>
    <div data-testid="OriginalText" className="paragraph">
      Middlemarch Partners was created to provide a different type of capital partner for fast growing, innovative companies. Having operated, advised, and funded companies in the financial and business services sectors, Middlemarch understands how critical capital planning is. At the same time, the firm’s principals know firsthand the burden capital raises and other transactions place on management’s shoulders. Lean executive teams can be stretched thin juggling these financing processes when the business itself needs their attention most. </div>
    {!isOpen ? <button data-testid="OurFirmReadMore" className="read-more-link" onClick={() => isOpenToggle()}> Read More ...</button> : p2}
  </>
);
}

export default OurFirmText;