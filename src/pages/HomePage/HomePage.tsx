"use client";
import React from 'react';

import AddOns from '@/components/AddOns/AddOns';
import AddOns2 from '@/components/AddOns2/AddOns2';
import AddOnsImageSlide from '@/components/AddOnsImageSlide/AddOnsImageSlide';
import FooterStates from '@/components/FooterStates/FooterStates';
import FooterUzo from '@/components/FooterUzo/FooterUzo';
import Header from '@/components/Header/Header';
import HeaderTop from '@/components/HeaderTop/HeaderTop';
import Hero from '@/components/Hero/Hero';
import HeroGallery from '@/components/HeroGallery/HeroGallery';
import ImageLayouts from '@/components/ImageLayouts/ImageLayouts';
import InternationalDestination from '@/components/InternationalDestination/InternationalDestination';
import PopularDestination from '@/components/PopularDestination/PopularDestination';
import SpritualDestination from '@/components/SpritualDestination/SpritualDestination';
import VideoCard from '@/components/VideoCard/VideoCard';
import PrepareToTravelWrapper from '@/components/PrepareToTravel/PrepareToTravelWrapper';
import DetailsHotels from '@/components/DetailsHotels/DetailsHotels';

const HomePage = () => {
  // const [scrollKey, setScrollKey] = useState(0);
  // let scrollTimeout: NodeJS.Timeout;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (scrollTimeout) clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => {
  //       setScrollKey(prev => prev + 1);
  //     }, 1500); // triggers once after scrolling stops for 150ms
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     if (scrollTimeout) clearTimeout(scrollTimeout);
  //   };
  // }, []);

  return (
    <div>
      <DetailsHotels />
      <Header />
      <HeaderTop />
      <Hero />
      <AddOnsImageSlide />
      {/* 👇 Force re-render on scroll */}
      {/* <PrepareToTravel key={scrollKey} /> */}
      <PrepareToTravelWrapper />
      <HeroGallery />
      <AddOns2 />
      <PopularDestination />
      <InternationalDestination />
      <SpritualDestination />
      <ImageLayouts />
      <AddOns />
      <VideoCard />
      <FooterStates />
      <FooterUzo />
    </div>
  );
};

export default HomePage;
