
import NavMenuItem from "@/layout/nav/nav-menu-item";
import Logo from "@/components/logo";
import CloseNav from "@/layout/nav/close-munu-button";

import { MainMenuData } from "@/layout/nav/navigation-data";


export default function Navigation() {


    return (
        <nav className="sticky top-0">
            <div className='flex justify-between lg:hidden'>
                <div id='logo'><Logo /></div>
                <CloseNav />
            </div>

            <ul className="flex flex-col gap-1 xl:gap-2">
                {MainMenuData.map(({ id, title, path, iconId, subMenu }) => (
                    <li key={title}>
                        <NavMenuItem id={id} title={title} path={path} iconId={iconId} subMenu={subMenu} />
                    </li>

                ))}
            </ul>
        </nav>
    );
};




