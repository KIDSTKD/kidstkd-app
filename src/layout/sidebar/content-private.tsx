"use client";

import Image from "next/image";
import MenuFirstLevelItem from "./menu-first-level-item";
import MenuSecondLevelItem from "./menu-second-level-item";

import IconDown from "../../../public/icons/buttons/arrow-open.svg";

import { PrivateMenuData } from "./navigation-data";
import { title } from "process";

const PrivateSidebalContent = () => {
   const MenuAboutUs = () => {
      document.getElementById("about-us")!.classList.toggle("hidden");
      document.getElementById("docs")!.classList.add("hidden");
      document.getElementById("news")!.classList.add("hidden");
      document.getElementById("calendar")!.classList.add("hidden");
      document.getElementById("taekwondo")!.classList.add("hidden");

      document.getElementById("arrowAbout")!.classList.toggle("rotate-90");
      document.getElementById("arrowDocs")!.classList.remove("rotate-90");
      document.getElementById("arrowNews")!.classList.remove("rotate-90");
      document.getElementById("arrowCalendar")!.classList.remove("rotate-90");
      document.getElementById("arrowTaekwondo")!.classList.remove("rotate-90");
   };

   return (
      <div className="flex flex-col gap-1 xl:gap-2">
         {/* <div onClick={MenuAboutUs} className='flex justify-between'>
                    <MenuFirstLevelItem id={1} title='О нас' path='/01-about-us' />
                    <Image id='arrowAbout' src={IconDown} alt='Открыть подменю' className='w-6 mx-3 transition' />
                </div>

                <div id='about-us' className='hidden'>
                    {AboutData.map(({ id, title, path }) => (
                        <MenuSecondLevelItem id={id} key={id} title={title} path={path} />
                    ))}
                </div> */}

         {PrivateMenuData.map((data) => (
            <>
               <MenuFirstLevelItem id={data.id} title={data.title} path={data.path} />
            </>
         ))}
      </div>
   );
};

export default PrivateSidebalContent;
