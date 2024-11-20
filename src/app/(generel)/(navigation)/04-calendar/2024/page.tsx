import Heading from '@/components/ui/heading'
import ClandarEventsByYearComponent from '@/components/calendar-components/calendar-events-by-year'

import { Metadata, ResolvingMetadata } from 'next'
const headerTitle = 'Календарь'
type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    return {
        title: headerTitle + " - " + params.slug,
        description: headerTitle + " - " + params.slug + ' | KIDSTKD',

    }
}


export const dynamic = 'force-dynamic'
export const revalidate = 1



export default async function Calendar({
    params: { slug },
}: {
    params: { slug: string }

}) {



    return (
        <>

            <Heading text={headerTitle + " - " + slug} />

           <ClandarEventsByYearComponent year={2024} />

        </>
    )
}