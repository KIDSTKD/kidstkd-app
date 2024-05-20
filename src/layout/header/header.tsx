import Link from "next/link";
import Image from "next/image";

import IconVK from "../../../public/icons/social/vk.svg"

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
                    <h2 className="text-2xl pl-6">Турниры</h2>
                </Link>
                <Link href='/rank'>
                    <h2 className="text-2xl pl-6">Рейтинг</h2>
                </Link>

            </div>

            <div className="flex flex-row gap-8 pr-2">

                <div className="flex flex-row gap-4">
                    <HeaderButton text="search" />
                    <HeaderButton text="mail" />
                    <HeaderButton text="user" />
                </div>

                <div className="">
                    <HeaderButton text="more" />
                </div>
            </div>


        </header>



    );
};

export default Header;