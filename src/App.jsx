import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home'
import LoadingParent from './components/Loading/LoadingParent'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <LoadingParent />
      <Home />
    </div>
  )
}

export default App