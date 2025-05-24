import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
import { lazy, ReactElement, Suspense } from 'react';
import "../app/globals.css";
// import PaymentPage from '@/components/PaymentPage/PaymentPage';
// import PropertyHotelInfoPage from '@/components/PropertyHotelInfoPage/PropertyHotelInfoPage';
// import GallaryDetailsHotels from '@/components/DetailsHotels/GallaryDetailsHotels/GallaryDetailsHotels';

// Add this type if needed
// import Book from './Book/Book';
// import HotelBooking from './HotelBooking/HotelBooking';
// import DetailsHotels from '@/components/DetailsHotels/DetailsHotels';

// const DetailsHotels = dynamic(() => import('@/components/DetailsHotels/DetailsHotels'), {
//   ssr: false, // IMPORTANT: disable SSR to avoid hydration mismatch
// });
// Lazy-load components
const Book = lazy(() => import('./Book/Book'));
const HotelBooking = lazy(() => import('./HotelBooking/HotelBooking'));
const HotelDetails = lazy(() => import('./HotelDetails/HotelDetails'));
const GallaryDetailsHotels = lazy(() => import('./HotelGallaryTaBNav/HotelGallaryTabNav'));
const PropertyHotelInfoPage = lazy(() => import('../components/PropertyHotelInfoPage/PropertyHotelInfoPage'));
const PaymentPage = lazy(() => import('../components/PaymentPage/PaymentPage'))
const AllCityList = lazy(() => import('../components/AllCityList/AllCityList'))
const BecomeAMember = lazy(() => import('../components/BecomeAMember/BecomeAMember'))
const CorporateMember = lazy(() => import('../components/CorporateMember/CorporateMember'))
// Example of lazy-loaded components using `dynamic`
// const Book = dynamic(() => import('./Book/Book'), { suspense: true }) as ComponentType;
// const HotelBooking = dynamic(() => import('./HotelBooking/HotelBooking'), { suspense: true });
// const DetailsHotels = dynamic(() => import('./HotelDetails/HotelDetails'), { suspense: true });

// Dynamically import your components for better performance (code splitting)
// const Book = dynamic(() => import('@/components/Book'));
// const HotelBooking = dynamic(() => import('@/components/HotelBooking'));

// Define a mapping between slug and component (lazy loaded)
const pageMap: Record<string, () => ReactElement> = {
  book: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Book />
    </Suspense>
  ),
  hotelBooking: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <HotelBooking />
    </Suspense>
  ),
  hotelDetails: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <HotelDetails />
    </Suspense>
  ),
  gallaryDetailsHotels: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <GallaryDetailsHotels />
    </Suspense>
  ),
  propertyHotelInfoPage: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyHotelInfoPage />
    </Suspense>
  ),
  paymentPage: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentPage />
    </Suspense>
  ),
  allCityList: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <AllCityList />
    </Suspense>
  ),
  becomeAMember: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <BecomeAMember />
    </Suspense>
  ),
  corporateMember: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <CorporateMember />
    </Suspense>
  ),
  // book: () => <Book />,
  // hotelBooking: () => <HotelBooking />,
  // detailsHotels: () => <DetailsHotels />
  // detailsHotels: () => <Suspense fallback={<div>Loading...</div>}><DetailsHotels /></Suspense>
};

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== 'string') {
    return <div>Loading...</div>;
  }

  const RenderComponent = pageMap[slug];

  if (!RenderComponent) {
    return <div>404 - Page Not Found</div>;
  }

  return (
    <main>
      {RenderComponent()}
    </main>
  );
}
