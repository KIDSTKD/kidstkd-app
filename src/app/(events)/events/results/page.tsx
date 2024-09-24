import Heading from '@/components/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Итоговые протоколы'
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