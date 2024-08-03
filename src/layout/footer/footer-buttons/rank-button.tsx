'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const RankButton = () => {

    const pathname = usePathname();

    return (

        <Link id='rank' className={`p-4 transition bg-no-repeat bg-center
        ${pathname == '/user/rank'
                ? "bg-iconPodiumActive"
                : "bg-iconPodium"
            }`} href='/user/rank'></Link>

    );
};

export default RankButton;