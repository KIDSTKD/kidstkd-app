import "../globals.css";

import PrivateNavigation from "@/layout/nav/privatenav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <div id='wrapper' className='grid transition-colors
      grid-areas-subLayout
      grid-cols-subLayout
      grid-rows-subLayout h-full
      '>
      <div id='nav' className="grid-in-nav bg-blue z-40
           fixed lg:relative
           
                       w-4/5 md:w-1/2 lg:w-60 xl:w-96
                       -translate-x-[100%] lg:translate-x-0
                      h-full transition-transform
                       "><PrivateNavigation /></div>
      <main className="grid-in-main overflow-y-hidden">{children}</main>
      <aside className="grid-in-aside hidden xl:flex w-0 xl:w-60"></aside>
    </div>
  );
}
