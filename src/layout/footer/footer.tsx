import Logo from "@/components/logo";

import MenuButton from "./footer-buttons/menu-button";
import EventButton from "./footer-buttons/event-button";
import HomeButton from "./footer-buttons/home-button";
import RankButton from "./footer-buttons/rank-button";
import UserButton from "./footer-buttons/user-button";

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
                <div className='hidden lg:grid grid-cols-3 justify-between pl-80 py-20 divide-x-[1px] divide-light'>
                    <div className="flex justify-center">
                        <h2 className="text-light text-2xl">Документы</h2>
                    </div>
                    <div>
                        <h2 className="text-light text-2xl">Новости</h2>
                        <h2 className="text-light text-2xl">Календарь</h2>
                    </div>
                    <div className="px-12"><Logo /></div>
                </div>
            </footer >
        </>
    );
};

export default Footer;