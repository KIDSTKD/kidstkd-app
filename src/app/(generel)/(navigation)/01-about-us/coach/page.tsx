import Heading from '@/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Тренерский коллектив'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
}

export default function AboutUs() {
  return (
    <div>
      <Heading text={headerTitle} />
      <h4>Салатский Станислав Вадимович</h4>
      <p>Педагог I категории</p>
      <p>Мастер Спорта России</p>
      <p>Образование высшее:</p>
      <p>2007-2012 Школа Педагогики ДВФУ</p>
      <p>2015-2017 Школа Искусства, культуры и спорта ДВФУ</p>
      <p>Повышение квалификации:</p>
      <p>2021 ФГБОУ &#34;ДГАФК&#34;, Адаптивная физическая культура: физкультурно-оздоровительные мероприятия, спорт</p>
    </div>
  )
}
