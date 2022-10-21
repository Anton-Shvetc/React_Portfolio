import React from 'react';
 import AboutSection from '../components/AboutSection';
 //import ServicesSection from '../components/ServicesSection';
 import ProjectsSection from '../components/ProjectsSection';
// import ContactBanner from '../components/ContactBanner';
//import HeroSection from '../components/HeroSection';
import SocialBox from '../components/SocialBox'


export default function Home() {
  return (
    <div>
      <SocialBox />
      {/* <HeroSection /> */}
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      {/* 

      <ContactBanner /> */}
    </div>
  );
}
