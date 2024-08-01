"use client";

import Image from "next/image";
import Logo from "@/components/logo";

import IconClose from "../../../public/icons/buttons/close.svg";

import PrivateSidebalContent from "./content-private";


const PrivateSidebar = () => {
   const CloseMenu = () => {
      document.getElementById("sidebar")!.classList.add("-translate-x-[100%]");
      document.getElementById("menu")!.classList.remove("bg-iconMenuActive");
      document.getElementById("logo")!.classList.remove("bg-hoverblue");
      document.getElementById("wrapper")!.classList.remove("bg-hoverlightblue");
      document.getElementById("overlay")!.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
   };

   return (
      <nav
         id="sidebar"
         className="transition-transform grid-in-sidebar bg-blue z-40
                       fixed lg:sticky
                       top-0
                       lg:grid
                       h-[100vh]
                       w-4/5 md:w-1/2 lg:w-60 xl:w-96
                       -translate-x-[100%] lg:translate-x-0
                       overflow-y-scroll	
                       "
      >
         <div className="flex justify-between lg:hidden">
            <div id="logo">
               <Logo />
            </div>
            <Image id="close" onClick={CloseMenu} src={IconClose} alt="Закрыть меню" className="w-6 ml-[100px] mr-3 transition" />
         </div>
         <PrivateSidebalContent />
      </nav>
   );
};

export default PrivateSidebar;
