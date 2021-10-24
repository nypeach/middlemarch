import React, { useState, useRef, useEffect } from 'react';
import Hamburger from './Hamburger';
import Landing from './Landing';
import OurFirm from './OurFirm';
import MerchantBank from './MerchantBank';
import PrivateCapital from './PrivateCapital';
import OurTeam from './OurTeam';
import IndustryFocus from './IndustryFocus';
import News from './News';
import Transactions from './Transactions';
import Footer from './Footer';




function App() {
  const [gotoLanding, setGotoLanding] = useState(false);
  const landingRef = useRef(null);
  const [gotoOurFirm, setGotoOurFirm] = useState(false);
  const ourFirmRef = useRef(null);
  const [gotoMerchBank, setGotoMerchBank] = useState(false);
  const merchBankRef = useRef(null);
  const [gotoPrivCap, setGotoPrivCap] = useState(false);
  const privCapRef = useRef(null);
  const [gotoOurTeam, setGotoOurTeam] = useState(false);
  const ourTeamRef = useRef(null);



  useEffect(() => {
    if (gotoLanding && landingRef.current) {
      landingRef.current.scrollIntoView();
      setGotoLanding(false);
    }
    if (gotoOurFirm && ourFirmRef.current) {
      ourFirmRef.current.scrollIntoView();
      setGotoOurFirm(false);
    }
    if (gotoMerchBank && merchBankRef.current) {
      merchBankRef.current.scrollIntoView();
      setGotoMerchBank(false);
    }
    if (gotoPrivCap && privCapRef.current) {
      privCapRef.current.scrollIntoView();
      setGotoPrivCap(false);
    }
    if (gotoOurTeam && ourTeamRef.current) {
      ourTeamRef.current.scrollIntoView();
      setGotoOurTeam(false);
    }

  }, [gotoLanding, gotoOurFirm, gotoMerchBank, gotoPrivCap, gotoOurTeam]);

  return (
    <div>
      <Hamburger
      onClickLanding={() => setGotoLanding(true)}
      onClickOurFirm={() => setGotoOurFirm(true)}
      onClickMerchBank={() => setGotoMerchBank(true)}
      onClickPrivCap={() => setGotoPrivCap(true)}
      onClickOurTeam={() => setGotoOurTeam(true)}

      />
      <div ref={landingRef}><Landing /></div>
      <div ref={ourFirmRef}>
        <OurFirm
        onClickMerchBank={() => setGotoMerchBank(true)}
        onClickPrivCap={() => setGotoPrivCap(true)}
        />
      </div>
      <div ref={merchBankRef}><MerchantBank /></div>
      <div ref={privCapRef}><PrivateCapital /></div>
      <div ref={ourTeamRef}><OurTeam /></div>
      <IndustryFocus />
      <Transactions />
      <News />
      <Footer />

    </div>
  )
}


export default App;