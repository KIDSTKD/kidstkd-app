import type { Metadata } from "next";
import type { Viewport } from 'next'

// import Logo from "@/components/logo";
// import Footer from "@/layout/footer/footer";
// import Header from "@/layout/header/header";

import "@/app/globals.css"

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
  verification: {
    yandex: 91602935,
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;


}>) {


  return (
    <html lang="ru">
      <body className='custom-bg'>
        <>
      {children}
      </>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(91602935, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });
              `,
          }}
        />
      </body>
    </html>
  );
}
