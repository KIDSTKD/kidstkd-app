import Link from "next/link";

import HeaderUserButton from "./header-components/header-user-button";
import HeaderSearchButton from "./header-components/header-search-button";
import HeaderMailButton from "./header-components/header-mail-button";

const Header = () => {

    return (
        <header className="grid-in-header 
                           hidden lg:flex 
                           flex-row justify-between
                           items-center
                           px-2
                           ">
            <div className="flex flex-row">
                <Link href='/events'>
                    <h2 className="text-2xl pl-6">Турниры</h2>
                </Link>
                <Link href='/rank'>
                    <h2 className="text-2xl pl-6">Рейтинг</h2>
                </Link>
            </div>
            <div className="flex flex-row gap-8 pr-2">
                <div className="flex flex-row gap-4">
                    <HeaderSearchButton />
                    <HeaderMailButton />
                    <HeaderUserButton />
                </div>

                <div className="flex flex-row gap-4">
                    <HeaderUserButton />
                </div>
            </div>


        </header>



    );
};

export default Header;