import Link from "next/link";

import HeaderButton from "./header-components/header-button";

const Header = () => {
   return (
      <header
         className="grid-in-header
                           hidden lg:flex 
                           flex-row justify-between
                           items-center
                           px-2
                           "
      >
         <div className="flex flex-row">
            <Link href="/events">
               <h2 className="text-2xl pl-6 cursor-pointer">Турниры</h2>
            </Link>
            <Link href="/user/rank">
               <h2 className="text-2xl pl-6 cursor-pointer">Рейтинг</h2>
            </Link>
         </div>

         <div className="flex flex-row gap-8 pr-4">
            <div className="flex flex-row gap-4">
               <HeaderButton text="search" link="" />
               <HeaderButton text="mail" link="" />
               <HeaderButton text="user" link="/user" />
            </div>

            <div className="flex">
               <div className="bg-blue rounded-full w-10 h-10 p-1 flex items-center justify-around">
                  <Link href={"/social"} >
                  <div className="p-4 bg-iconMore hover:rotate-90 transition-transform cursor-pointer"></div>
                  </Link>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
