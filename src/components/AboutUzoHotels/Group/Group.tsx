import React from 'react';
import styles from './Group.module.css';
import Image from 'next/image';
import HeaderAboutUzo from '@/components/Headers/HeaderAboutUzo/HeaderAboutUzo';
import GroupBanner from './GroupBanner/GroupBanner';
import FooterUzo from '@/components/FooterUzo/FooterUzo';
import GroupSlide from './GroupSlide/GroupSlide';

const slides = [
  {
    title: 'We Are an Unrivaled Leader across Brand Segments',
    description: 'Our unmatched brand portfolio is the industry’s most diverse: 40+ hotel brands across all segments from luxury to economy, a comprehensive portfolio of extended stay and branded residences, plus entertainment, restaurants & bars, coworking, business services, and more.',
    imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'We Are an Expert Business Partner',
    description: 'We bring unique expertise and solutions to maximize performance, value, and growth for our partners across operational management, talent, sustainability, procurement, distribution, loyalty, digital, and more. Our Business Booster brands bring deep expertise to drive day-to-day operations and performance.',
    imageUrl: 'https://images.pexels.com/photos/7876711/pexels-photo-7876711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'We Are Shaping a New Future for Hospitality',
    description: 'Our pioneering spirit fosters innovation and continuous transformation. We look ahead, trailblazing towards emerging trends and anticipating opportunities. We dynamically form partnerships with start-ups, businesses, and associations, accelerating innovation to design the future of hospitality.',
    imageUrl: 'https://images.pexels.com/photos/52988/swim-water-diving-underwater-52988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'We Are the Most Diversified Hospitality Group',
    description: 'Our holistic ecosystem of brands and experiences, value-added services and solutions, all-in-one booking platform, and powerful loyalty program allows us to expand our services and relationships with our clients and enhance the Accor experience both during and beyond hotel stays, while delivering business performance to our partners.',
    imageUrl: 'https://images.pexels.com/photos/7108317/pexels-photo-7108317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Global Presence with Local Expertise',
    description: 'We bring unique expertise and solutions to maximize performance, value, and growth for our partners across operational management, talent, sustainability, procurement, distribution, loyalty, digital, and more. Our Business Booster brands bring deep expertise to drive day-to-day operations and performance.',
    imageUrl: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Innovation in Guest Experiences',
    description: 'Our pioneering spirit fosters innovation and continuous transformation. We look ahead, trailblazing towards emerging trends and anticipating opportunities. We dynamically form partnerships with start-ups, businesses, and associations, accelerating innovation to design the future of hospitality.',
    imageUrl: 'https://images.pexels.com/photos/2451570/pexels-photo-2451570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];
const slides2 = [
  {
    title: 'We Are Heartists®',
    description: 'The notion of Heartist® – Heart + Artist – embodies our culture and our mindset. Being a Heartist® means working with heart, with passion, and being an artist with everyone’s individual personality.',
    imageUrl: '/images/group1.jpg'
  },
  {
    title: 'We Are Empowering Talent',
    description: 'Our leading training and development programs and wealth of career opportunities aim to empower all Talent to grow and thrive, feeling free to dare and to develop their potential by taking on new challenges and opening new doors to continuous learning.',
    imageUrl: '/images/group2.jpg'
  },
  {
    title: 'We Are Inclusive',
    description: 'With team members in all four corners of the globe, diversity is in our DNA.Our open, inclusive culture celebrates the diversity of all cultures and welcomes everyone as themselves and with unrestricted and equal opportunities to reach their full potential.',
    imageUrl: '/images/group3.jpg'
  },
  {
    title: 'We Are Caring',
    description: 'We bring heartfelt care to our hospitality, actively striving to make a positive impact. We are proud of our role as social elevator for local communities, with an open-minded recruitment process and mentoring, learning, and development opportunities for our teams.',
    imageUrl: '/images/group4.jpg'
  },

];
const slides3 = [
  {
    title: 'We Are Collectively Mobilizing for Change',
    description: 'As a people- driven business, we put people first and are paving the way forward through collective engagement and action.With the strong support of our hotel owners, we’re embarking our teams, guests, suppliers, partners, and all our stakeholders on a shared journey to shape a more sustainable hospitality.',
    imageUrl: '/images/group5.jpg'
  },
  {
    title: 'We Are Transforming Hotel Operations: “Stay Better”',
    description: 'Hand in hand with our hotels, we are transforming operations and practices at every level. By designing hotels with sustainability in mind from the outset, optimizing energy consumption, preserving water resources, and reducing waste, we are reducing our environmental footprint and aim to reach our commitment to net zero emissions by 2050.',
    imageUrl: '/images/group6.jpg'
  },
  {
    title: 'We Are Building a More Sustainable Food Model: “Eat Better”',
    description: 'As a major player in restauration, we aim to set an example by accelerating our transition to a responsible food model. We are investing and innovating across the entire food chain to source more responsibly and locally, reduce food waste, and promote eco-conscious choices to our clients.',
    imageUrl: '/images/group7.jpg'
  },
  {
    title: 'We Are Promoting and Protecting Local Ecosystems: “Explore Better”',
    description: 'With our hotels deeply rooted in their communities, we work hand in hand with locals to protect and promote natural ecosystems, biodiversity, and local cultures.By encouraging greater guest awareness and more conscious exploration we aim to shape new, more sustainable ways of traveling.',
    imageUrl: '/images/group8.jpg'
  },


];

const Group = () => {
  return (
    <>
      <div className={styles.aboutUzoHotels}>
        <div className={styles.headerTopBody}>
          <HeaderAboutUzo />
          {/* <HeaderTransparent /> */}
          {/* <HeaderTop /> */}
        </div>
        <section className={styles.groupContainer}>
          <div className={styles.imageOverlay}>
            <Image
              src="https://images.pexels.com/photos/31090084/pexels-photo-31090084/free-photo-of-aerial-view-of-marmaris-beachfront-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Group"
              fill
              className={styles.groupImage}
              priority
            />
            <div className={styles.contentOverlay}>
              <div className={styles.textBlock}>
                <h1 className={styles.title}>Group</h1>
                <h2 className={styles.subtitle}>
                  We are far more than a worldwide leader. We are more than 360,000 Talents placing people at the heart of what we do, and nurturing real passion for service and achievement beyond limits.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <GroupBanner
          title="Welcome From Our Chairman & CEO"
          heading="At UZO Hotels, we anticipate opportunities, and constantly innovate, adapt, and pioneer to bring to life our vision of responsible hospitality."
          authorName="Sébastien Bazin"
          authorTitle="Chairman & CEO of UZO Hotels"
          imageUrl="/images/CEOprofile.jpg"
          imageAlt="Sébastien Bazin, Chairman & CEO of UZO Hotels"
        />
        <GroupSlide
          slides={slides}
          headerTitle="An Integrated Hospitality Ecosystem Designed for Growth"
          headerDescription="Our diversified ecosystem of leading brands, tailored services and expert solutions allows us to create and deliver truly distinctive experiences and services in line with evolving client and business needs and new ways of living, working and traveling – and maximize value for our partners. "
        />
        <GroupSlide
          slides={slides2}
          headerTitle="People Are at the Heart of What We Do"
          headerDescription="Our Heartists® are at the core of our success. With people at heart, we foster meaningful connections and our culture nurtures inclusiveness and empowerment, encourages creativity, and welcomes everyone with openness."
        />
        <GroupSlide
          slides={slides3}
          headerTitle="Sustainability Is at the Core of Our Strategy"
          headerDescription="We believe it’s our role to shape a more sustainable future for travel and hospitality by building a model where we contribute more than we take and inspiring meaningful change. We have engaged a deep transformation to embed sustainability across our activities, with people and nature at the core."
        />
        <div className={styles.footerBox}>
          <FooterUzo />
        </div>
      </div>
    </>
  );
};

export default Group;