import Heading from '@/components/ui/heading'



import { Metadata } from 'next'
const headerTitle = 'Освобождение от захватов'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}


export default function Ppaegi() {
    return (
        <>
            <Heading text={headerTitle} />
            <h5>Нэрё ппэги</h5>
            <h5>Олле ппэги</h5>
            <h5>Тхыро ппэги</h5>
            <h5>Толле ппэги</h5>
            <h5>Хвитулльо ппэги</h5>
            <h5>Монэ ппэги</h5>
        </>

    )
}



