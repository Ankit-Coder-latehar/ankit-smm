
import './App.css';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import BusinessGrid from './components/BusinessGrid';
import BusinessSection from './components/BusinessSection';
import BusinessSolutions from './components/BusinessSolution';
import Cards from './components/CradSlider';
import DeliveryAppSection from './components/DeliveryAppSection';
import DevelopmentSection from './components/Development';
import DevelopmentExpertise from './components/DevelopmentExpertise';
import DevelopmentLifecycle from './components/DevelopmentLifecycle';
import DownNavbar from './components/DownNavbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HeroSlider from './components/HeroSlider';
import InfoSection from './components/InfoSection';
import LastSection from './components/LastSectrion';
import MediaCoverage from './components/MediaCoverage';
import Navbar from './components/Navbar';
import ResearchSection from './components/ResearchSection';
import Slider from './components/Slider';
import SolutionsSection from './components/SolutionsSection';
import StatsSection from './components/StatsSection';
import CustomSlider from './components/WhatClientSay';
import CardSlider from './components/WhatClientSay';




function App() {
  return (
    <div className="App">
  <Navbar/>
  <DownNavbar/>
  <HeroSlider/>
  {/* <HeroSection/> */}
  <AboutSection/>
  <InfoSection/>
  <Slider/>
  <BusinessSolutions/>
  <Cards/>
  <DevelopmentSection/>
  <BusinessSection/>
  <BusinessGrid/>
  <DevelopmentLifecycle/>
  <DevelopmentExpertise/>
  <SolutionsSection/>
  <DeliveryAppSection/>
  <CustomSlider/>
  <MediaCoverage/>
  <StatsSection/>
  <BlogSection/>
  <ResearchSection/>
  <LastSection/>
  <Footer/>
    </div>
  );
}

export default App;
