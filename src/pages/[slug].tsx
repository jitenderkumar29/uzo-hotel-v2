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
const Login = lazy(() => import('../components/Auth/Login/Login'))
const LoginOne = lazy(() => import('../components/Auth/LoginOne/LoginOne'))
const LoginPass = lazy(() => import('../components/Auth/LoginPass/LoginPass'))
const AboutUzoHotels = lazy(() => import('../components/AboutUzoHotels/AboutUzoHotels'))
const RegisterUser = lazy(() => import('../components/Auth/RegisterUser/RegisterUser'))
const RegisterUzoOne = lazy(() => import('../components/Auth/RegisterUzoOne/RegisterUzoOne'))
const RegisterUzoPass = lazy(() => import('../components/Auth/RegisterUzoPass/RegisterUzoPass'))
const ForgotPasswordUser = lazy(() => import('../components/Auth/ForgotPasswordUser/ForgotPasswordUser'))
const ResetPasswordUser = lazy(() => import('../components/Auth/ResetPasswordUser/ResetPasswordUser'))
const ForgotPasswordUzoOne = lazy(() => import('../components/Auth/ForgotPasswordUzoOne/ForgotPasswordUzoOne'))
const ForgotPasswordUzoPass = lazy(() => import('../components/Auth/ForgotPasswordUzoPass/ForgotPasswordUzoPass'))
const OffersUzo = lazy(() => import('../components/OffersUzo/OffersUzo'))
const UzoCards = lazy(() => import('../components/UzoCards/UzoCards'))
const UserProfile = lazy(() => import('../components/UserProfile/UserProfile'))
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
  login: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  ),
  loginOne: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginOne />
    </Suspense>
  ),
  loginPass: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPass />
    </Suspense>
  ),
  aboutUzoHotels: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUzoHotels />
    </Suspense>
  ),
  registerUser: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterUser />
    </Suspense>
  ),
  registerUzoOne: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterUzoOne />
    </Suspense>
  ),
  registerUzoPass: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterUzoPass />
    </Suspense>
  ),
  forgotPasswordUser: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordUser />
    </Suspense>
  ),
  resetPasswordUser: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordUser />
    </Suspense>
  ),
  forgotPasswordUzoOne: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordUzoOne />
    </Suspense>
  ),

  forgotPasswordUzoPass: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordUzoPass />
    </Suspense>
  ),
  offersUzo: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <OffersUzo />
    </Suspense>
  ),
  uzoCards: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <UzoCards />
    </Suspense>
  ),
  userProfile: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile />
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
