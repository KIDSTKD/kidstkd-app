import Image from 'next/image'

import CompLogo from '../../../../public/img/events/ussur.png'
import FestLogo from '../../../../public/img/events/fest.png'

import { Metadata } from 'next'
const headerTitle = 'Турниры'
export const metadata: Metadata = {
  title: headerTitle + ' спортивного клуба KIDSTKD',
  description: 'Достижения, рейтинг, личная информация',
  alternates: {
    canonical: 'https://kidstkd.ru/events',
  },
}

export default function EventsPage() {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 p-1'>

<div className='bg-light/25 hover:bg-light/5 transition-colors cursor-pointer rounded-sm'>
<Image src={FestLogo} alt='Фестиваль с.Покровка' className='p-5'/>
<div className='truncate
                      text-gray font-bebasRegular text-2xl text-center p-2 pb-0
                      select-none cursor-pointer 
      '>Фестиваль с.Покровка</div>  
      <div className='font-exo2 pt-0 pr-4 text-right'>16/11/2024 - с. Покровка</div>  
      </div>

    <div className='bg-light/25 hover:bg-light/5 transition-colors cursor-pointer rounded-sm'>
<Image src={CompLogo} alt='Открытое Первенство Уссурийского ГО' className='p-5'/>
<div className='truncate
                      text-gray font-bebasRegular text-2xl text-center p-2 pb-0
                      select-none cursor-pointer 
      '>Открытое Первенство Уссурийского ГО</div>  
      <div className='font-exo2 pt-0 pr-4 text-right'>6/10/2024 - г. Уссурйиск</div>  
      </div>



    </div>
  )
}