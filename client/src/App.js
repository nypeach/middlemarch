import Hamburger from './Hamburger';
import Landing from './Landing';
import OurFirm from './OurFirm';
import OurTeam from './OurTeam';
import IndustryFocus from './IndustryFocus';
import News from './News';
import Transactions from './Transactions';
import React, {useState, useRef, useEffect} from 'react';



function App() {
  const [gotoLanding, setGotoLanding] = useState(false);
  const landingRef = useRef(null);
  const [gotoOurTeam, setGotoOurTeam] = useState(false);
  const ourTeamRef = useRef(null);
  const [gotoOurFirm, setGotoOurFirm] = useState(false);
  const ourFirmRef = useRef(null);


  useEffect(() => {
    if (gotoLanding && landingRef.current) {
      landingRef.current.scrollIntoView();
      setGotoLanding(false);
    }
    if (gotoOurFirm && ourFirmRef.current) {
      ourFirmRef.current.scrollIntoView();
      setGotoOurFirm(false);
    }
    if (gotoOurTeam && ourTeamRef.current) {
      ourTeamRef.current.scrollIntoView();
      setGotoOurTeam(false);
    }

  }, [gotoLanding, gotoOurFirm, gotoOurTeam]);

  return (
    <div>
      <Hamburger
      onClickLanding={() => setGotoLanding(true)}
      onClickOurFirm={() => setGotoOurFirm(true)}
      onClickOurTeam={() => setGotoOurTeam(true)}

      />
      <div ref={landingRef}><Landing /></div>
      <div ref={ourFirmRef}><OurFirm /></div>
      <div ref={ourTeamRef}><OurTeam /></div>
      <IndustryFocus />
      <Transactions />
      <News />


    </div>
  )
}


export default App;