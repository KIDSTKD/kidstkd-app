import Heading from '@/components/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Летний лагерь'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
}

export default function AboutUs() {
  return (
    <div>
      <Heading text={headerTitle} />


    </div>
  )
}
