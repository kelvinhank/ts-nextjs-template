'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import { SkeletonCard } from '@/app/components/skeleton-card';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <div className='space-y-4'>
          <h1 className='text-xl font-medium text-gray-400/80'>Loading...</h1>

          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
            <SkeletonCard isLoading={true} />
          </div>
        </div>
      </section>
    </>
  );
}
