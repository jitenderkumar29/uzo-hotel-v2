import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import Book from './Book/Book';
import HotelBooking from './HotelBooking/HotelBooking';
import "../app/globals.css";

// Dynamically import your components for better performance (code splitting)
// const Book = dynamic(() => import('@/components/Book'));
// const HotelBooking = dynamic(() => import('@/components/HotelBooking'));

// Define a mapping between slug and component (lazy loaded)
const pageMap: Record<string, () => ReactElement> = {
  book: () => <Book />,
  hotelBooking: () => <HotelBooking />,
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
