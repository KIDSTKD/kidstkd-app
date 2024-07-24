import Heading from '@/components/ui/heading'

import KibonGroupList from '../../../../../../../components/kibon-components/kibon-group-list'


import { Metadata } from 'next'
const headerTitle = 'Уклоны'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}


export default function Pihagi() {
    return (
        <>
            <Heading text={headerTitle} />


            <KibonGroupList />


        </>

    )
}



