import Footer from "@/layout/footer/footer";

import "../globals.css";

export default function RootLayout({
  children, privatenav
}: Readonly<{
  children: React.ReactNode;
  privatenav: React.ReactNode;

}>) {
  return (

    <div id='wrapper' className='grid transition-colors
      grid-areas-subLayout
      grid-cols-subLayout
      grid-rows-subLayout
      '>

      <main className="grid-in-main overflow-y-hidden">{children}</main>
      <aside className="grid-in-aside hidden xl:flex w-0 xl:w-60"></aside>
    </div>
  );
}
