import Heading from '@/ui/heading'
import { Metadata } from 'next'
const headerTitle = 'Экипировка'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
  alternates: {
    canonical: 'https://kidstkd.ru/06-gear',
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 1


export default function Gear() {
  return (
    <>
      <Heading text={headerTitle} />



    </>
  );
}
