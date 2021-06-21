import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Landing from './Landing';
import OurFirm from './OurFirm';

function App() {
  useEffect(() => {
    axios.get('/api/hello')
      .then(res => setState(res.data))
  }, [])

  const [state, setState] = useState('')

  return (
    <div>
      <Landing />
      <OurFirm />
    </div>
  )
}


export default App;