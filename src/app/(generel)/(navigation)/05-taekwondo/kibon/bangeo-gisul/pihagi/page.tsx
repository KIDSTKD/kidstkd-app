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
            {/* <h5>Тхыро пхихаги</h5>
            <h5>Питхыро пхихаги</h5>
            <h5>Натчхуо пхихаги</h5>
            <h5>Чочхё пхихаги</h5> */}

            <KibonGroupList kisul_group='bangeo-gisul' kisul='pihagi' />


        </>

    )
}



