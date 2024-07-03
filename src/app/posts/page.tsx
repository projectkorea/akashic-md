import React, { Suspense } from 'react';
import PostFeed from '../../components/PostFeed'; // Adjust the path if necessary
import Weather from '../../components/Weather';   // Adjust the path if necessary
import ErrorBoundary from '../ErrorBoundary'; // Adjust the path if necessary

export default function Posts() {
  return (
    <section className="p-4 space-y-4">
      <ErrorBoundary fallback={<p className="text-red-500">Failed to load feed</p>}>
        <Suspense fallback={<p className="text-gray-500">Loading feed...</p>}>
          <PostFeed />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p className="text-red-500">Failed to load weather</p>}>
        <Suspense fallback={<p className="text-gray-500">Loading weather...</p>}>
          <Weather />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}