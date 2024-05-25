import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/main.scss';

import ClientApplication from '@/app/ClientApplication';
import { AddressBar } from '@/app/components/address-bar';
import Footer from '@/app/components/layout/Footer';
import Header from '@/app/components/layout/Header';
import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='[color-scheme:dark]'>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
        <Header />

        <div className='lg:pl-72'>
          <div className='mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
            <div className='rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
              <div className='rounded-lg bg-black'>
                <AddressBar />
              </div>
            </div>

            <div className='rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
              <div className='rounded-lg bg-black p-3.5 lg:p-6'>
                {' '}
                <ClientApplication>{children}</ClientApplication>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
