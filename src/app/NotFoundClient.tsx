'use client';

import { useSearchParams } from 'next/navigation';

export default function NotFoundClient() {
  const searchParams = useSearchParams();
  const error = searchParams!.get('error');

  if (!error) return null;

  return (
    <div style={{ color: 'red', marginTop: '1rem' }}>
      Error from query string: {error}
    </div>
  );
}
