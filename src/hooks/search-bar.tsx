'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
    const searchParams = useSearchParams()
    const page = searchParams.get('page')


    const aaa = typeof (page) === 'string' ? Number(page) : 1

    return aaa

}


