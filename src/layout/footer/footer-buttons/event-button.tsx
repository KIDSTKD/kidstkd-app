'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const EventButton = () => {

    const pathname = usePathname();

    return (

        <Link id='events' className={`p-4 transition bg-no-repeat bg-center 
        ${pathname == '/events'
                ? "bg-iconEventsActive"
                : "bg-iconEvents"
            }`} href='/events'></Link>

    );
};

export default EventButton;