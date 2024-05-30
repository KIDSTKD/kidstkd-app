
import { Metadata } from 'next'
const headerTitle = 'Тхэквондо в Уссурийске'
export const metadata: Metadata = {
  title: headerTitle + ' для детей от 4 лет',
  description: 'Спортивные секции для детей в Уссурийске. Олимпийское тхэквондо для мальчиков и девочек от 4 лет. Бесплатное пробное занятие',
  alternates: {
    canonical: 'https://kidstkd.ru',
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 1


export default function Home() {
  return (
    <>
      11

    </>
  );
}
