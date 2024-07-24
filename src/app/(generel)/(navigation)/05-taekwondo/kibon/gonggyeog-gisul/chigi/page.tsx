import Heading from '@/components/ui/heading'

import KibonGroupList from '@/components/kibon-components/kibon-group-list'

import { Metadata } from 'next'
const headerTitle = 'Удары (чхиги)'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}

export default function Chigi() {
    return (
        <>
            <Heading text={headerTitle} />

            <KibonGroupList />


         

        </>
    )
}