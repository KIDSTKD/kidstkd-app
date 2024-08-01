import Heading from '@/components/ui/heading'

import Poster from './wtc-components/poster'

import { Metadata } from 'next'
const headerTitle = 'Чемпионаты Мира по тхэквондо'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
}

export default function Rank() {
  return (
    <>
      <Heading text={headerTitle} />
      <Poster />

    </>
  )
}