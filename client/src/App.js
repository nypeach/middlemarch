// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Landing from './Landing';
import OurFirm from './OurFirm';
import OurTeam from './OurTeam';
import IndustryFocus from './IndustryFocus';
import Blog from './Blog';
import Transactions from './Transactions';
import Hamburger from './Hamburger';


function App() {
  // useEffect(() => {
  //   axios.get('/api/hello')
  //     .then(res => setState(res.data))
  // }, [])

  // const [state, setState] = useState('')

  return (
    <div>
      <Hamburger />
      <Landing />
      <OurFirm />
      <OurTeam />
      <IndustryFocus />
      <Transactions />
      <Blog />


    </div>
  )
}


export default App;