'use client'

const MenuButton = () => {

    const SidebarMenu = () => {
        document.getElementById('nav')!.classList.toggle('-translate-x-[100%]');
        document.getElementById('menu')!.classList.toggle('bg-iconMenuActive');
        document.getElementById('overlay')!.classList.toggle('hidden');
    }

    return (
        <div id='menu' onClick={SidebarMenu} className='p-4 bg-iconMenu transition bg-no-repeat bg-center'></div>

    );
};

export default MenuButton;