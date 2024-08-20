import Image from 'next/image'
import Heading from '@/components/ui/heading'

import Summer from '../../../../../../public/img/01-about-us/camp/summer.png'
import Winter from '../../../../../../public/img/01-about-us/camp/winter.png'

import { Metadata } from 'next'
const headerTitle = 'УТС (Учебно-тренировочные сборы)'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
  alternates: {
    canonical: "https://kidstkd.ru/01-about-us/camp/",
 },
}

export default function AboutUs() {
  return (
    <div>
      <Heading text={headerTitle} />

      <div className='grid grid-cols-2'>
      <Image src={Summer} alt='УТС - Восток (летние УТС)' className='p-2 bg-summerbluelight hover:bg-summerblue' />
      <Image src={Winter} alt='УТС - Восток (зимние УТС)' className='p-2 bg-winterlight hover:bg-wintergray' />
      </div>

      <p>Учебно–тренировочные сборы (УТС) – это период интенсивных тренировок, как для опытных спортсменов, так и для начинающих.</p>

      <p>Цель учебно-тренировочных сборов - повышение уровня физической подготовленности спортсменов, совершенствование спортивного мастерства.</p>
      <p>УТС помогают спортсменам:</p>
      <p>▫ не потерять спортивную форму, которую они наработали за учебный тренировочный год;</p>
      <p>▫ приучиться к самостоятельности, выработать такие важные черты характера, как смелость, целеустремленность и взаимопомощь;</p>
      <p>▫ максимально сконцентрироваться на тренировках (на сборах ребенка не отвлекают гаджеты и телевизор)</p>
      <p>▫ восстановить организм, так как во время УТС ребенок не только занимается спортом, но и отдыхает на свежем воздухе и проводит время со своими сверстниками.</p>
      <p>Учебно-тренировочные сборы – это отличная возможность для спортсмена подтянуть свои показатели и набраться нового опыта.</p>


    </div>
  )
}
