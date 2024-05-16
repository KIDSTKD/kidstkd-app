'use client'

import Logo from "@/components/logo";

const Footer = () => {

    const SidebarMenu = () => {
        document.getElementById('nav')!.classList.toggle('-translate-x-[100%]');
        document.getElementById('menu')!.classList.toggle('bg-iconMenuActive');
        document.getElementById('overlay')!.classList.toggle('hidden');
    }

    return (
        <>
            <div id='overlay' className='bg-dark opacity-60 fixed top-0 left-0 w-full h-full z-30 hidden'></div>

            <footer className="grid-in-footer bg-blue z-50 fixed bottom-0 w-full lg:relative">

                <div className='lg:hidden w-full'>
                    <div className="flex justify-around h-14">
                        <div id='menu' onClick={SidebarMenu} className='p-4 bg-iconMenu transition bg-no-repeat bg-center'></div>
                        <div id='events' className='p-4 bg-iconEvents hover:bg-iconEventsActive transition bg-no-repeat bg-center'></div>
                        <div id='home' className='p-4 bg-iconHome transition bg-no-repeat bg-center'></div>
                        <div id='rank' className='p-4 bg-iconPodium hover:bg-iconPodiumActive transition bg-no-repeat bg-center'></div>
                        <div id='user' className='p-4 bg-iconUser transition bg-no-repeat bg-center'></div>
                    </div>

                </div>
                <div className='hidden lg:grid grid-cols-3 justify-between py-20 divide-x-[1px] divide-light'>
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