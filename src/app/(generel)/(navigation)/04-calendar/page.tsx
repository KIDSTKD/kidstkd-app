import Heading from '@/components/ui/heading'
import ClandarEventsByYearComponent from '@/components/calendar-components/calendar-events-by-year'

import { Metadata } from 'next'
const headerTitle = 'Календарь'


export async function generateMetadata(
    
): Promise<Metadata> {

    return {
        title: headerTitle,
        description: headerTitle + '| KIDSTKD',

    }
}

const year = 2024


export const dynamic = 'force-dynamic'
export const revalidate = 1



export default async function Calendar() {

    

    return (
        <>

            <Heading text={headerTitle + " " + year} />

           <ClandarEventsByYearComponent year={year} />

        </>
    )
}