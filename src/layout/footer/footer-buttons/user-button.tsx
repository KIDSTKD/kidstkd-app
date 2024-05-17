'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const UserButton = () => {

    const pathname = usePathname();

    return (

        <Link id='user' className={`p-4 transition bg-no-repeat bg-center hover:bg-iconUserActive
        ${pathname == '/user'
                ? "bg-iconUserActive"
                : "bg-iconUser"
            }`} href='/user'></Link>

    );
};

export default UserButton;