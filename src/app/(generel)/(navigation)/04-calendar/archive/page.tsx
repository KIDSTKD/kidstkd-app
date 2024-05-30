import Heading from '@/components/ui/heading'
import Link from 'next/link'
import { ArchiveData } from '@/components/calendar-components/archive-data'

import { Metadata } from 'next'
const headerTitle = 'Календарь - архив'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
}

export default function Calendar() {
  return (
    <>
      <Heading text={headerTitle} />

      {ArchiveData.map((year: any) => (
        <Link href={`/04-calendar/${year.year}`} key={year}><p className='cursor-pointer'>Календарь {year.year}</p></Link>
      ))}
    </>
  )
}
