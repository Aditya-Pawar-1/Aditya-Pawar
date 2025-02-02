import Navbar from "./Navbar"
import { useTheme } from '../context/ThemeContext';
import Hero from "./Hero";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Loading from "./Loading";

const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        data-theme={`${theme === 'dark' ? 'dark' : 'light'}`}
        className={`relative dark:bg-[#0A0A0A] dark:text-neutral-50 bg-[#F3F3FF] text-neutral-950 max-w-screen-2xl mx-auto overflow-hidden transition-colors duration-500 ease-in-out  select-none`} >
        <Loading />
        <Navbar />
        <Hero />
        <Project />
        <Contact />
        <Footer />
      </div >

    </>
  )
}

export default Home