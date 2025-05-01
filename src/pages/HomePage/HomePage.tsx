"use client";
import AddOns from '@/components/AddOns/AddOns'
import AddOns2 from '@/components/AddOns2/AddOns2'
import AddOnsImageSlide from '@/components/AddOnsImageSlide/AddOnsImageSlide';
import FooterStates from '@/components/FooterStates/FooterStates'
import FooterUzo from '@/components/FooterUzo/FooterUzo'
import Header from '@/components/Header/Header'
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import Hero from '@/components/Hero/Hero'
import HeroGallery from '@/components/HeroGallery/HeroGallery'
import ImageLayouts from '@/components/ImageLayouts/ImageLayouts'
import InternationalDestination from '@/components/InternationalDestination/InternationalDestination'
import PopularDestination from '@/components/PopularDestination/PopularDestination'
import PrepareToTravel from '@/components/PrepareToTravel/PrepareToTravel'
import SpritualDestination from '@/components/SpritualDestination/SpritualDestination'
import VideoCard from '@/components/VideoCard/VideoCard';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeaderTop />
      <Hero />
      <AddOnsImageSlide />
      <PrepareToTravel />
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
  )
}

export default HomePage
