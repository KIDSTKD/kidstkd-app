import "@/app/globals.css"
import Header from "@/layout/header/header";
import Logo from "@/components/logo";
import Sidebar from "@/layout/sidebar/sidebar";
import EventSidebar from "@/layout/sidebar/sidebar-events";

import Footer from "@/layout/footer/footer";


import LinkSpan from "@/components/ui/link-span";
import Heading from "@/components/ui/heading";

import { Metadata } from "next";
const headerTitle = "Страница не найдена";
export const metadata: Metadata = {
   title: headerTitle,
   description: "Спортивные секции для детей в Уссурийске. Олимпийское тхэквондо для мальчиков и девочек от 4 лет. Бесплатное пробное занятие",
};

export default function NotFound() {
   return (

      <div id='wrapper' className='grid transition-all
      grid-areas-mobileLayout lg:grid-areas-rootLayout
      grid-cols-mobileLayout lg:grid-cols-rootLayout
      grid-rows-mobileLayout lg:grid-rows-rootLayout
      min-h-dvh
      '>
          <div className="grid-in-logo bg-blue lg:w-60 xl:w-96"><Logo /></div>
          <Header />
          <Sidebar />
          <main className="grid-in-main overflow-y-hidden">


          <div className="min-h-dvh flex flex-col">
         <Heading text={headerTitle} />
         <p>
            Если вы видите эту ошибку, это означает, что запрашиваемая страница не найдена на сервере. К сожалению, это может произойти по разным
            причинам: страница была удалена, перемещена или ее адрес был изменен.
         </p>
         <p>
          <LinkSpan text={"Вернуться на главную страницу"} href={"/"} />
         </p>
      </div>

          </main>
          <aside className="grid-in-aside hidden xl:flex w-0 xl:w-60"></aside>
          <Footer />
        </div> 


     
   );
}



