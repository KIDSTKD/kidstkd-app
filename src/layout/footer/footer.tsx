import Link from "next/link";

import Logo from "@/components/logo";

import MenuButton from "./footer-buttons/menu-button";
import EventButton from "./footer-buttons/event-button";
import HomeButton from "./footer-buttons/home-button";
import RankButton from "./footer-buttons/rank-button";
import UserButton from "./footer-buttons/user-button";

import Level1 from "./level1";
import Level2 from "./level2";

import { DocData } from "../nav/navigation-data";
import { NewsData } from "../nav/navigation-data";
import { CalendarData } from "../nav/navigation-data";


const NewsLinks = NewsData.slice(0, 2)
const CalendarLinks = CalendarData.slice(0, 2)


const Footer = () => {

    return (
        <>
            <div id='overlay' className='bg-dark opacity-60
                                         fixed top-0 left-0 w-full h-full z-30 hidden'></div>

            <footer className="grid-in-footer bg-blue z-50 fixed bottom-0 w-full lg:relative">

                <div className='lg:hidden w-full'>
                    <div className="flex justify-around h-14">
                        <MenuButton />
                        <EventButton />
                        <HomeButton />
                        <RankButton />
                        <UserButton />
                    </div>

                </div>
                <div className='hidden lg:grid grid-cols-3 justify-between pl-80 py-10 divide-x-[1px] divide-light items-center'>
                    <div>
                        <Level1 menu="02-docs" text="Документы" />

                        {DocData.map(({ id, title, path }) => (
                            <Level2 key={id} path={path} text={title} />

                        ))}
                    </div>

                    <div>
                        <Level1 menu="03-news" text="Новости" />
                        {NewsLinks.map(({ id, title, path }) => (
                            <Level2 key={id} path={path} text={title} />

                        ))}

                        <Level1 menu="04-calendar" text="Календарь" />
                        {CalendarLinks.map(({ id, title, path }) => (
                            <Level2 key={id} path={path} text={title} />

                        ))}
                    </div>
                    <div className="px-12"><Logo /></div>
                </div>
            </footer >
        </>
    );
};

export default Footer;