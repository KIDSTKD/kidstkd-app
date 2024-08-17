import Image from 'next/image'
import Heading from '@/components/ui/heading'

import Summer from '../../../../../../public/img/01-about-us/camp/summer.png'
import Winter from '../../../../../../public/img/01-about-us/camp/winter.png'

import { Metadata } from 'next'
const headerTitle = 'УТС (Учебно-тренировочные сборы)'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
}

export default function AboutUs() {
  return (
    <div>
      <Heading text={headerTitle} />

      <div className='grid grid-cols-2'>
      <Image src={Summer} alt='УТС - Восток (летние УТС)' className='p-2 bg-summerbluelight hover:bg-summerblue' />
      <Image src={Winter} alt='УТС - Восток (зимние УТС)' className='p-2 bg-winterlight hover:bg-wintergray' />
      </div>


    </div>
  )
}
