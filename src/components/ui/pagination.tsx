'use client'

import { useSearchParams } from 'next/navigation'

import Link from "next/link";

const Pagination = ({ totalPages, link }: {
    totalPages: number,
    link: string,
}) => {

    const arr = Array.from({ length: totalPages }, (v, i) => i + 1);

    const searchParams = useSearchParams()
    const page = searchParams.get('page')


    return (
        <>
            <div className="flex flex-row justify-center items-center p-2 gap-2">

                {arr.map((pag: any) => (
                    <Link href={`${link}?page=${pag}`} key={arr[0]}>
                        <div className={`text-light font-bebasRegular text-center text-lg leading-5
                w-6 h-6 rounded cursor-pointer
                border-2 border-blue
                hover:bg-lightblue
                ${page == pag
                                ? "bg-lightblue"
                                : "bg-blue"
                            }
                `}>
                            {pag}
                        </div>
                    </Link>
                ))}
            </div>

        </>

    )
}

export default Pagination;





