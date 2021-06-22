import {useState} from 'react';

function useToggle (initialVal = false) {
  const [someState, setSomeState] = useState(initialVal);
  const toggle = () => {
    const windowOffset = window.scrollY
    setSomeState(!someState)
    if (!someState) {
      document.body.setAttribute('style', '')
      window.scrollTo(0, windowOffset)
    } else {
      document.body.setAttribute('style', `position: fixed; top: -${windowOffset}px; left: 0; right:0;`)
    }
  };
  return [someState, toggle];
}

export default useToggle;