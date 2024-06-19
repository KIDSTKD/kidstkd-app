import Heading from '@/components/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Прыжки'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}


export default function Ttwigi() {
    return (
        <>
            <Heading text={headerTitle} />

            <h5>Молли твиги</h5>
            <h5>Нопхи твиги</h5>
            <h5>Ттвио номги</h5>
            <h5>Ттвио тольги</h5>


        </>
    )
}