import Heading from '@/components/ui/heading'
import { Metadata } from 'next'
const headerTitle = ' (номгиги)'
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