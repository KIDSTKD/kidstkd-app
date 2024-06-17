
import { Metadata } from 'next'
const headerTitle = 'Турниры'
export const metadata: Metadata = {
  title: headerTitle + ' спортивного клуба KIDSTKD',
  description: 'Достижения, рейтинг, личная информация',
  alternates: {
    canonical: 'https://kidstkd.ru/events',
  },
}

export default function EventsPage() {

  return (
    <>
      events test
    </>
  )
}