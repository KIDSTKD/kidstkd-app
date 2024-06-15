'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
    const searchParams = useSearchParams()
    const page = searchParams.get('page')

    return page
}