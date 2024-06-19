import Heading from '@/components/ui/heading'


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
            <h5>큰 똘쩌귀</h5>
            <h5>작은 똘쩌귀</h5>
            <h5>학다리서기 작은 똘쩌귀</h5>

        </>
    )
}