import Link from "next/link";


import HeaderButton from "./header-components/header-button";

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
                    <h2 className="text-2xl pl-6 cursor-pointer">Турниры</h2>
                </Link>
                <Link href='/user/rank'>
                    <h2 className="text-2xl pl-6 cursor-pointer">Рейтинг</h2>
                </Link>

            </div>

            <div className="flex flex-row gap-8 pr-2">

                <div className="flex flex-row gap-4">
                    <HeaderButton text="search" link="" />
                    <HeaderButton text="mail" link="" />
                    <HeaderButton text="user" link="/user" />
                </div>

                <div className="">
                    <HeaderButton text="more" link="" />
                </div>
            </div>


        </header>



    );
};

export default Header;