import Heading from '@/components/ui/heading'
import { Metadata } from 'next'
const headerTitle = 'Удары (ччирыги)'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}

export default function Etc() {
    return (
        <>
            <Heading text={headerTitle} />
        </>
    )
}