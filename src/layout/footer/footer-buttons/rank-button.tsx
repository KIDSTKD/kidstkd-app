'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const RankButton = () => {

    const pathname = usePathname();

    return (

        <Link id='rank' className={`p-4 transition bg-no-repeat bg-center
        ${pathname == '/rank'
                ? "bg-iconPodiumActive"
                : "bg-iconPodium"
            }`} href='/rank'></Link>

    );
};

export default RankButton;