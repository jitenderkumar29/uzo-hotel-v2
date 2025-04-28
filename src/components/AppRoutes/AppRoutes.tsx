// components/AppRoutes.tsx

'use client';  // This makes the component client-side only (for using hooks like usePathname)

import { usePathname } from 'next/navigation'; // Hook to get the current pathname
import { FC } from 'react';


import HotelBooking from '@/pages/HotelBooking/HotelBooking';
import HomePage from '@/pages/HomePage/HomePage';
import Book from '@/pages/Book/Book';

interface Page {
  Link: string;
  View: React.ComponentType;
}

// interface AppRoutesProps {
//   login: boolean; // Assuming login state is passed to this component
// }

// const AppRoutes: FC<AppRoutesProps> = ({ login }) => {
const AppRoutes: FC = () => {
  const pathname = usePathname(); // Get the current path from the URL

  // Define the pages and their corresponding components
  const pages: Page[] = [
    { Link: '/', View: HomePage },
    { Link: '/book', View: Book },
    { Link: '/hotelBooking', View: HotelBooking },
    // { Link: '/searchBarMultiple', View: SearchBarMultiple },
  ];

  // Find the matching page based on the current path
  const matchedPage = pages.find((page) => page.Link === pathname);

  // Default to a 404 page if no match is found
  const View = matchedPage?.View ?? HomePage;
  // const View = matchedPage?.View ?? (() => <div>404 - Page Not Found</div>);

  return <View />; // Render the matched component
};

export default AppRoutes;
