'use client'
import { Suspense } from 'react';
import NotFoundClient from './NotFoundClient';
// import NotFoundClient from '@/NotFoundClient';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Suspense fallback={null}>
        <NotFoundClient />
      </Suspense>
    </div>
  );
}
