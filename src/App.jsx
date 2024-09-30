import React from 'react'
import Home from './components/Home'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Home />
    </div>
  )
}

export default App