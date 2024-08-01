'use client'

import Image from "next/image";
import MenuFirstLevelItem from "./menu-first-level-item";
import MenuSecondLevelItem from "./menu-second-level-item";
import Logo from "@/components/logo";


import IconDown from '../../../public/icons/buttons/arrow-open.svg'
import IconClose from '../../../public/icons/buttons/close.svg'

import { AboutData, DocData, NewsData, CalendarData, TaekwondoData } from "./navigation-data";

const Sidebar = () => {

    const MenuAboutUs = () => {
        document.getElementById('about-us')!.classList.toggle('hidden');
        document.getElementById('docs')!.classList.add('hidden');
        document.getElementById('news')!.classList.add('hidden');
        document.getElementById('calendar')!.classList.add('hidden');
        document.getElementById('taekwondo')!.classList.add('hidden');

        document.getElementById('arrowAbout')!.classList.toggle('rotate-90');
        document.getElementById('arrowDocs')!.classList.remove('rotate-90');
        document.getElementById('arrowNews')!.classList.remove('rotate-90');
        document.getElementById('arrowCalendar')!.classList.remove('rotate-90');
        document.getElementById('arrowTaekwondo')!.classList.remove('rotate-90');
    }

    const MenuDocs = () => {
        document.getElementById('docs')!.classList.toggle('hidden');
        document.getElementById('about-us')!.classList.add('hidden');
        document.getElementById('news')!.classList.add('hidden');
        document.getElementById('calendar')!.classList.add('hidden');
        document.getElementById('taekwondo')!.classList.add('hidden');

        document.getElementById('arrowDocs')!.classList.toggle('rotate-90')
        document.getElementById('arrowAbout')!.classList.remove('rotate-90')
        document.getElementById('arrowNews')!.classList.remove('rotate-90')
        document.getElementById('arrowCalendar')!.classList.remove('rotate-90')
        document.getElementById('arrowTaekwondo')!.classList.remove('rotate-90')
    }

    const MenuNews = () => {
        document.getElementById('news')!.classList.toggle('hidden');
        document.getElementById('about-us')!.classList.add('hidden');
        document.getElementById('docs')!.classList.add('hidden');
        document.getElementById('calendar')!.classList.add('hidden');
        document.getElementById('taekwondo')!.classList.add('hidden');

        document.getElementById('arrowNews')!.classList.toggle('rotate-90')
        document.getElementById('arrowAbout')!.classList.remove('rotate-90')
        document.getElementById('arrowDocs')!.classList.remove('rotate-90')
        document.getElementById('arrowCalendar')!.classList.remove('rotate-90')
        document.getElementById('arrowTaekwondo')!.classList.remove('rotate-90')
    }

    const MenuCalendar = () => {
        document.getElementById('calendar')!.classList.toggle('hidden');
        document.getElementById('about-us')!.classList.add('hidden');
        document.getElementById('docs')!.classList.add('hidden');
        document.getElementById('news')!.classList.add('hidden');
        document.getElementById('taekwondo')!.classList.add('hidden');

        document.getElementById('arrowCalendar')!.classList.toggle('rotate-90')
        document.getElementById('arrowAbout')!.classList.remove('rotate-90')
        document.getElementById('arrowDocs')!.classList.remove('rotate-90')
        document.getElementById('arrowNews')!.classList.remove('rotate-90')
        document.getElementById('arrowTaekwondo')!.classList.remove('rotate-90')
    }

    const MenuTaekwondo = () => {
        document.getElementById('taekwondo')!.classList.toggle('hidden');
        document.getElementById('about-us')!.classList.add('hidden');
        document.getElementById('docs')!.classList.add('hidden');
        document.getElementById('news')!.classList.add('hidden');
        document.getElementById('calendar')!.classList.add('hidden');

        document.getElementById('arrowTaekwondo')!.classList.toggle('rotate-90');
        document.getElementById('arrowAbout')!.classList.remove('rotate-90');
        document.getElementById('arrowDocs')!.classList.remove('rotate-90');
        document.getElementById('arrowNews')!.classList.remove('rotate-90');
        document.getElementById('arrowCalendar')!.classList.remove('rotate-90');
    }

    const OnlyFirstLavel = () => {
        document.getElementById('about-us')!.classList.add('hidden');
        document.getElementById('docs')!.classList.add('hidden');
        document.getElementById('news')!.classList.add('hidden');
        document.getElementById('calendar')!.classList.add('hidden');
        document.getElementById('taekwondo')!.classList.add('hidden');

        document.getElementById('arrowAbout')!.classList.remove('rotate-90');
        document.getElementById('arrowDocs')!.classList.remove('rotate-90');
        document.getElementById('arrowNews')!.classList.remove('rotate-90');
        document.getElementById('arrowCalendar')!.classList.remove('rotate-90');
        document.getElementById('arrowTaekwondo')!.classList.remove('rotate-90');

        document.getElementById('sidebar')!.classList.add('-translate-x-[100%]');
        document.getElementById('menu')!.classList.remove('bg-iconMenuFilled');
        document.getElementById('logo')!.classList.remove('bg-hoverblue');
        document.getElementById('wrapper')!.classList.remove('bg-hoverlightblue');
        document.getElementById('overlay')!.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');


    }

    const CloseMenu = () => {
        document.getElementById('sidebar')!.classList.add('-translate-x-[100%]');
        document.getElementById('menu')!.classList.remove('bg-iconMenuActive');
        document.getElementById('logo')!.classList.remove('bg-hoverblue');
        document.getElementById('wrapper')!.classList.remove('bg-hoverlightblue');
        document.getElementById('overlay')!.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    return (
        <nav id='sidebar' className='transition-transform grid-in-sidebar bg-blue z-40
                       fixed lg:sticky
                       top-0
                       lg:grid
                       h-[100vh]
                       w-4/5 md:w-1/2 lg:w-60 xl:w-96
                       -translate-x-[100%] lg:translate-x-0
                       overflow-y-scroll	
                       '>
            <div className='flex justify-between lg:hidden'>
                <div id='logo'><Logo /></div>
                <Image id='close' onClick={CloseMenu} src={IconClose} alt='Закрыть меню' className='w-6 ml-[100px] mr-3 transition' />
            </div>

            <div className="flex flex-col gap-1 xl:gap-2">

                <div onClick={MenuAboutUs} className='flex justify-between'>
                    <MenuFirstLevelItem id={1} title='О нас' path='/01-about-us' />
                    <Image id='arrowAbout' src={IconDown} alt='Открыть подменю' className='w-6 mx-3 transition' />
                </div>

                <div id='about-us' className='hidden'>
                    {AboutData.map(({ id, title, path }) => (
                        <MenuSecondLevelItem id={id} key={id} title={title} path={path} />
                    ))}
                </div>

                <div onClick={MenuDocs} className='flex justify-between'>
                    <MenuFirstLevelItem id={2} title='Документы' path='/02-docs' />
                    <Image id='arrowDocs' src={IconDown} alt='Открыть подменю' className='w-6 mx-3 transition' />
                </div>

                <div id='docs' className='hidden'>
                    {DocData.map(({ id, title, path }) => (
                        <MenuSecondLevelItem id={id} key={id} title={title} path={path} />
                    ))}
                </div>

                <div onClick={MenuNews} className='flex justify-between'>
                    <MenuFirstLevelItem id={3} title='Новости' path='/03-news' />
                    <Image id='arrowNews' src={IconDown} alt='Открыть подменю' className='w-6 mx-3 transition' />
                </div>

                <div id='news' className='hidden'>
                    {NewsData.map(({ id, title, path }) => (
                        <MenuSecondLevelItem id={id} key={id} title={title} path={path} />
                    ))}
                </div>


                <div onClick={MenuCalendar} className='flex justify-between'>
                    <MenuFirstLevelItem id={4} title='Календарь' path='/04-calendar' />
                    <Image id='arrowCalendar' src={IconDown} alt='Открыть подменю' className='w-6 mx-3 transition' />
                </div>

                <div id='calendar' className='hidden'>
                    {CalendarData.map(({ id, title, path }) => (
                        <MenuSecondLevelItem id={id} key={id} title={title} path={path} />
                    ))}
                </div>

                <div onClick={MenuTaekwondo} className='flex justify-between'>
                    <MenuFirstLevelItem id={5} title='Тхэквондо' path='/05-taekwondo' />
                    <Image id='arrowTaekwondo' src={IconDown} alt='Открыть подменю' className='w-6 mx-3 transition' />
                </div>

                <div id='taekwondo' className='hidden'>
                    {TaekwondoData.map(({ id, title, path }) => (
                        <MenuSecondLevelItem id={id} key={id} title={title} path={path} />
                    ))}
                </div>

                <div onClick={OnlyFirstLavel} className='flex justify-between'>
                    <MenuFirstLevelItem id={6} title='Экипировка' path='/06-gear' />
                </div>

                <div onClick={OnlyFirstLavel} className='flex justify-between'>
                    <MenuFirstLevelItem id={7} title='Контакты' path='/07-contacts' />
                </div>

            </div>
        </nav>
    );
};

export default Sidebar;

