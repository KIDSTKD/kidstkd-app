import type { Metadata } from "next";
import type { Viewport } from 'next'

import Logo from "@/components/logo";
import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import SideMenu from "@/layout/nav/sidemenu";

import "./globals.css";

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
  children, navigation, privatenav,
}: Readonly<{
  children: React.ReactNode;
  navigation: React.ReactNode;
  privatenav: React.ReactNode;

}>) {


  return (
    <html lang="ru">
      <body className='custom-bg'>
        <div id='wrapper' className='grid transition-colors
      grid-areas-mobileLayout lg:grid-areas-rootLayout
      grid-cols-mobileLayout lg:grid-cols-rootLayout
      grid-rows-mobileLayout lg:grid-rows-rootLayout
      w-full min-h-dvh
      '>
          <div className="grid-in-logo bg-blue w-full lg:w-60 xl:w-96"><Logo /></div>
          <Header />
          <div id='nav' className="grid-in-nav bg-blue z-40
           fixed lg:relative
           
                       w-4/5 md:w-1/2 lg:w-60 xl:w-96
                       -translate-x-[100%] lg:translate-x-0
                      h-full transition-transform
                       "><SideMenu navigation={navigation} privatenav={privatenav} /></div>
          <div className="grid-in-main">{children}</div>
          <Footer />



        </div>
      </body>
    </html>
  );
}
