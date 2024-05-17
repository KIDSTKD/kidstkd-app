'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeButton = () => {

    const pathname = usePathname();

    return (

        <Link id='home' className={`p-4 transition bg-no-repeat bg-center
        ${pathname == '/'
                ? "bg-iconHomeActive"
                : "bg-iconHome"
            }`} href='/'></Link>

    );
};

export default HomeButton;