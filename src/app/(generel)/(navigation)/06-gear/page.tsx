import Heading from '@/components/ui/heading'

import Button from '@/components/ui/button'


import ItemCard from '@/components/gear-components/card'

import { Metadata } from 'next'
import Link from 'next/link'
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


      

      <ItemCard />

            <Link href='https://t.me/tkd_store_ru'><Button text={'Подробнее'} /></Link>



    </>
  );
}
