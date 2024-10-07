import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import PageDevelopment from './components/PageDevelopment';
import Error from './components/Error';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='projects' element={<PageDevelopment />}>
        <Route path='development' element={<PageDevelopment />} />
        <Route path='design' element={<PageDevelopment />} />
      </Route>
      <Route path='contact' element={<PageDevelopment />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App