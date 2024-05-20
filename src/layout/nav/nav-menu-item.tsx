'use client'

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import IconArrowOpen from '../../../public/icons/buttons/arrow-open.svg'

import { AboutData, DocData, NewsData, CalendarData, TaekwondoData, EmptyData } from "./navigation-data";


const NavMenuItem = ({ id, title, path, iconId, subMenu }: {
    id: number;
    title: string;
    path: string,
    iconId: string,
    subMenu: boolean,
}) => {

    const pathname = usePathname();

    const subMenuData = iconId == 'About' ? AboutData :
        iconId == 'Docs' ? DocData :
            iconId == 'News' ? NewsData :
                iconId == 'Calendar' ? CalendarData :
                    iconId == 'Taekwondo' ? TaekwondoData : EmptyData


    return (
        <>
            <div className="flex justify-between">
                <Link key={id} href={path} passHref className={`
            w-full flex justify-between
            font-bebasLight text-light
            text-2xl xl:text-3xl
            pl-8 py-2 cursor-pointer
            border-l-8 hover:border-l-light
            transition-all ${pathname == path
                        ? "border-l-ligth"
                        : "border-l-transparent"
                    }`}
                >
                    {title}
                    <Image id={iconId} src={IconArrowOpen} alt='Открыть подменю'
                        className={`w-6 mx-3 transition
            ${subMenu == true
                                ? ""
                                : "hidden"
                            }
            ${pathname.includes(path)
                                ? "rotate-90"
                                : ""
                            }`} />
                </Link>

            </div>

            <ul id={iconId + 'Data'} className={`${pathname.includes(path) ? "" : "hidden"}`}>
                {subMenuData.map(({ id, title, path }) => (
                    <li key={title} className={`font-exo2 text-light list-none 
                                text-sm md:text-base 
                                pl-14
                                py-1 md:py-2
                                border-l-4 border-transparent hover:border-light
                                hover:transition transition-colors ${pathname.includes(path)
                            ? "border-light transition-colors"
                            : "border-transparent"
                        }`}
                    >
                        <Link key={id} href={path} passHref>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>


    );
};

export default NavMenuItem;