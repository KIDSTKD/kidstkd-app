import Heading from '@/components/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Контакты'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
  alternates: {
    canonical: 'https://kidstkd.ru/07-contacts',
  },
}

export default function Contacts() {
  return (
    <>
      <Heading text={headerTitle} />
    </>
  )
}