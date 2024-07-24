import Heading from '@/ui/heading'

import KibonGroupList from '@/components/kibon-components/kibon-group-list'

import { Metadata } from 'next'
const headerTitle = 'Прочее'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}

export default function Etc() {
    return (
        <>
            <Heading text={headerTitle} />

            <KibonGroupList kisul_group="jase" kisul="etc" />


        </>
    )
}