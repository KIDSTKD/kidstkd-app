'use client'

import { useSearchParams } from 'next/navigation'

import Link from "next/link";

const Pagination = ({ totalPages }: {
    totalPages: number,
}) => {

    const arr = Array.from({ length: totalPages }, (v, i) => i + 1);

    const searchParams = useSearchParams()
    const page = searchParams.get('page')


    return (
        <>
            <div className="flex flex-row justify-center items-center p-2">

                {arr.map((pag: any) => (
                    <Link href={`/03-news?page=${pag}`} key={arr[0]}>
                        <div className={`text-light font-bebasRegular text-center text-lg leading-6
                w-6 h-6 m-2 rounded cursor-pointer
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

            {page} - с пагинации
        </>

    )
}

export default Pagination;





