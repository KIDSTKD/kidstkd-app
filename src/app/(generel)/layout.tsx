import "@/app/globals.css"
import Header from "@/layout/header/header";
import Logo from "@/components/logo";
import Sidebar from "@/layout/sidebar/sidebar";
import Footer from "@/layout/footer/footer";


export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
<>
            <div id='wrapper' className='grid transition-all
      grid-areas-mobileLayout lg:grid-areas-rootLayout
      grid-cols-mobileLayout lg:grid-cols-rootLayout
      grid-rows-mobileLayout lg:grid-rows-rootLayout
      min-h-dvh
      '>
          <div className="grid-in-logo bg-blue lg:w-60 xl:w-96"><Logo /></div>
          <Header />
          <Sidebar />
          <main className="grid-in-main overflow-y-hidden">{children}</main>
          <aside className="grid-in-aside hidden xl:flex w-0 xl:w-60"></aside>
          <Footer />
        </div> 
    </>
  );
}


