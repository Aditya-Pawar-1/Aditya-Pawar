import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import PageDevelopment from './components/PageDevelopment';
import Error from './components/Error';
import ProjectPage from './components/ProjectPage';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='projects' element={<ProjectPage />}>
        {/* <Route path='development' element={<PageDevelopment />} />
        <Route path='design' element={<PageDevelopment />} /> */}
      </Route>
      <Route path='contact' element={<PageDevelopment />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App