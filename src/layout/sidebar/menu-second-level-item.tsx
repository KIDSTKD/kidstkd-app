'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const SidebarMenu = () => {
    document.getElementById('sidebar')!.classList.add('-translate-x-[100%]');
    document.getElementById('menu')!.classList.remove('bg-iconMenuActive');
    document.getElementById('logo')!.classList.remove('bg-hoverblue');
    document.getElementById('wrapper')!.classList.remove('bg-hoverlightblue');
    document.getElementById('overlay')!.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');

}

const MenuSecondLevelItem = ({ id, title, path }: { id: number | string; title: string; path: string }) => {

    const pathname = usePathname();

    return (
        <Link key={id} href={path} passHref>
            <li onClick={SidebarMenu} className={`font-exo2 text-light list-none
        text-sm md:text-base 
        pl-[60px] 
        py-1 md:py-2 short:py-[2px]
        border-l-4 border-blue
        hover:border-light
        hover:transition
        transition-all ${pathname.includes(path)
                    ? "border-light transition-all"
                    : "border-blue"
                }`}
            >{title}</li>
        </Link>
    );
};


export default MenuSecondLevelItem;


