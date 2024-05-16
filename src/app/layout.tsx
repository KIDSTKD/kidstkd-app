import Logo from "@/components/logo";
import Footer from "@/layout/footer";
import Header from "@/layout/header";

import "./globals.css";

export default function RootLayout({
  children, navigation,
}: Readonly<{
  children: React.ReactNode;
  navigation: React.ReactNode;
  private: React.ReactNode;

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
                       ">{navigation}</div>
          <div className="grid-in-main">{children}</div>
          <Footer />



        </div>
      </body>
    </html>
  );
}
