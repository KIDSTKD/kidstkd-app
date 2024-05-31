'use client'

import { usePathname } from "next/navigation";


const SideMenu = ({
    navigation, privatenav,
}: Readonly<{
    navigation: React.ReactNode;
    privatenav: React.ReactNode;

}>) => {

    const pathname = usePathname();

    //Костыли

    return (
        <>
            <div className={`
            ${pathname.includes("events")
                    ? "hidden"
                    : ""
                }
                ${pathname.includes("rank")
                    ? "hidden"
                    : ""
                }
                ${pathname.includes("user")
                    ? "hidden"
                    : ""
                }
                `}>{navigation}</div>
            <div className={`
            ${pathname.includes("events")
                    ? ""
                    : "hidden"
                }
                ${pathname.includes("rank")
                    ? ""
                    : "hidden"
                }
                ${pathname.includes("user")
                    ? ""
                    : "hidden"
                }
                `}>{privatenav}</div>

        </>
    );
};



export default SideMenu;

