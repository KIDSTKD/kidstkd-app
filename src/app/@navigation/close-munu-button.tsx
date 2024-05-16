'use client'

import IconClose from '../../../public/icons/buttons/close.svg'

import Image from "next/image";


const CloseNav = () => {

    const SidebarMenu = () => {
        document.getElementById('nav')!.classList.toggle('-translate-x-[100%]');
        document.getElementById('overlay')!.classList.toggle('hidden');
        document.getElementById('menu')!.classList.toggle('bg-iconMenuActive');


    }

    return (
        <>
            <Image onClick={SidebarMenu} id='close' src={IconClose} alt='Закрыть меню' className='w-6 ml-24 mr-3 transition' />

        </>
    );
};



export default CloseNav;

