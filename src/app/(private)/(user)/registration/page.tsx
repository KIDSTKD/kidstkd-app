
import Heading from '@/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Регистрация пользователя'
export const metadata: Metadata = {
  title: headerTitle + ' для детей от 4 лет',
  description: 'Спортивные секции для детей в Уссурийске. Олимпийское тхэквондо для мальчиков и девочек от 4 лет. Бесплатное пробное занятие',
  alternates: {
    canonical: 'https://kidstkd.ru',
  },
}

export default function Home() {

  return (
    <>
      <Heading text={headerTitle} />

      <p>Регистрация доступна только для тренеров, спортсменов и членов команды KIDSTKD</p>


    </>
  )
}

