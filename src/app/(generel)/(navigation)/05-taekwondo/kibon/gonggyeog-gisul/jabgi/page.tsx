import Heading from '@/ui/heading'
import { Metadata } from 'next'
const headerTitle = 'Захваты (чапки)'
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