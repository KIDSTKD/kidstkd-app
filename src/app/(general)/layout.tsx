import type { Metadata } from "next";
import type { Viewport } from 'next'
import "../globals.css";


const headerTitle = 'Тхэквондо в Уссурийске'

export const viewport: Viewport = {
  themeColor: '#255d98',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://kidstkd.ru'),
  title: headerTitle + ' | KIDSTKD',
  description: headerTitle + ' - Тхэквондо в Уссурийске для детей от 4 лет. Бесплатное пробное занятие',
  applicationName: 'KIDSTKD',
  manifest: '/manifest.json',
  icons: {
    apple: 'icon-512x512.png',
    icon: '/favicon.ico',
  },
  openGraph: {
    images: '/img/og-main.png',
    title: headerTitle + ' | KIDSTKD',
    description: headerTitle + ' - Тхэквондо в Уссурийске для детей от 4 лет. Бесплатное пробное занятие',
    url: 'https://kidstkd.ru',
    siteName: 'kidstkd.ru',
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div id='wrapper' className='grid transition-colors
      grid-areas-subLayout
      grid-cols-subLayout
      grid-rows-subLayout
      '>
      <main className="grid-in-main">{children}</main>
      <aside className="grid-in-aside hidden xl:flex w-0 xl:w-60"></aside>
    </div>
  );
}
