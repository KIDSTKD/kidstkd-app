import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuFirstLevelItem = ({ id, title, path }: { id: number; title: string; path: string }) => {

    const pathname = usePathname();

    return (
        <>
            <Link key={id} href={path} className='pr-8' passHref>
                <li className={`w-full flex justify-between
            font-bebasLight text-light
            text-2xl xl:text-3xl
            pl-8 py-2 cursor-pointer
            border-l-8 hover:border-l-light
            transition-all ${pathname.includes(path)
                        ? "border-l-ligth"
                        : "border-l-transparent"
                    }`}
                >{title}</li>
            </Link>
        </>
    );
};

export default MenuFirstLevelItem;