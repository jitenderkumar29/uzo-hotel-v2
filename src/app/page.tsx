
import { Suspense } from 'react';
import '../lib/fontawesome'; // import the lib config
import SearchError from '@/components/SearchError';

export default function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>

        {/* Must wrap in <Suspense> since useSearchParams uses "useTransition" */}
        <Suspense fallback={null}>
          <SearchError />
        </Suspense>
      </main>
    </>
  );
}
