import Heading from '@/components/ui/heading'
import Link from 'next/link'


import { Metadata } from 'next'
const headerTitle = 'Чэчари соги'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}


export default function JajariSeogi() {
    return (
        <>
            <Heading text={headerTitle} />
            <p>Термин «стойки» (соги – 서기) в тхэквондо охватывает различные позиции, в которых человек стоит, устанавливая ноги на землю для выполнения атакующих и защитных движений. Устойчивость в стойках зависит от ширины опоры, а также от высоты центра тяжести тела. Если ступни широко разведены, базовая площадь стойки увеличивается, и более низкое положение колен приводит к понижению центра тяжести, что увеличивает устойчивость и создает прочную опору. Если ступни сведены вместе или сужены, базовая площадь стойки уменьшается, а выпрямление колен повышает центр тяжести.</p>
            <p>Подвижность центра тяжести позволяет быстро перемещаться и демонстрировать ловкость. Стойки могут отличаться по положению ступней (разведены в стороны или параллельны) и по положению колен (прямые или согнутые). Руки могут свободно двигаться, но туловище должно оставаться вертикальным. </p>
            <p>Техника стойки оказывает значительное влияние на движение центра тяжести и вызывает различные технические изменения в зависимости от положения и движения ног. Важно удерживать положение центра тяжести в зависимости от антропометрических показателей, которые могут отличаться у разных людей не только габаритами но и пропорциями. Для повышения эффективности стойки, в зависимости от индивидуальных особенностей допускается незначительно изменить положение стоп для большей устойчивости.</p>


            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <Link href='/kibon/jase/jejari-seogi/moa-seogi' >
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Моа соги</h5>
                    </div>
                </Link>
                <Link href='/kibon/jase/jejari-seogi/naranhi-seogi' >
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Нарани соги</h5>
                    </div>
                </Link>
                <Link href='/kibon/jase/jejari-seogi/juchum-seogi' >
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Чучхум соги</h5>
                    </div>
                </Link>
                <Link href='/kibon/jase/jejari-seogi/hagdari-seogi' >
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Хактари соги</h5>
                    </div>
                </Link>
            </div>

        </>
    )
}