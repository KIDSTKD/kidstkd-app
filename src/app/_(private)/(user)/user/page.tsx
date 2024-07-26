import UserAvatar from '@/components/user-components/user-avatar'
import WidgetMedals from '@/components/user-components/widget-medals'
import WidgetAchivments from '@/components/user-components/widget-achivments'

import Logout from '@/components/user-components/logout'

import { Metadata } from 'next'
const headerTitle = 'Личный кабинет'
export const metadata: Metadata = {
  title: headerTitle + ' спортивного клуба KIDSTKD',
  description: 'Достижения, рейтинг, личная информация',
  alternates: {
    canonical: 'https://kidstkd.ru/user',
  },
  robots: {
    index: false,
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 3600

export default function UserPage() {

  return (
    <>
      <UserAvatar />
      <WidgetMedals />
      <WidgetAchivments />
      <Logout />
    </>
  )
}