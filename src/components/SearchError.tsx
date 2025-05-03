'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchError() {
  const searchParams = useSearchParams();
  const error = searchParams!.get('error');

  if (!error) return null;

  return (
    <div style={{ color: 'red', padding: '1rem' }}>
      Error: {error}
    </div>
  );
}
