import Heading from '@/components/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Турнирные таблицы'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle,
  alternates: {
    canonical: 'https://kidstkd.ru/events/draw_sheets',
  },
}

export default function EventsPage() {

  return (
<>
<Heading text={headerTitle} />

</>
  )
}