import Heading from '@/components/ui/heading'
import DojangCard from '@/components/contacts-components/dojang-card'

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
      <DojangCard city='Уссурийск' place='ФК Тхэквондо-Лэнд' adress='ул. Ленина, 41, 2-ой этаж' src='https://yandex.ru/map-widget/v1/-/CCUjyUgq~B' />
      <DojangCard city='с. Михайловка' place='ДЮСШ' adress='ул. Ленинская, 38' src='https://yandex.ru/map-widget/v1/-/CCUjy4F9WD' />
      <DojangCard city='Уссурийск' place='ДС N246' adress='ул. Октябрьская, 189' src='https://yandex.ru/map-widget/v1/-/CCUjyYxz8B' />
      <DojangCard city='с. Михайловка' place='ДС Светлячок' adress='ул. 2-я Краснознаменская , 51' src='https://yandex.ru/map-widget/v1/-/CCUjy4bWtD' />

    </>
  )
}