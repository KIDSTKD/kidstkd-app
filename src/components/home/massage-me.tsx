import Image from "next/image";

import WA from '../../../public/icons/social/whatsapp.svg'
import TG from '../../../public/icons/social/tg.svg'
import TP from '../../../public/icons/social/telephone.svg'

const MessageData = [
    { id: 1, icon: WA, href: 'http://wa.me/79644432986' },
    { id: 2, icon: TG, href: 'https://t.me/salatsky' },
    { id: 3, icon: TP, href: 'tel:+79644432986' },
]

const Massage = () => (


    <>
        <div className='flex flex-col md:flex-row  bg-lightblue md:gap-10'>
            <div className="md:w-1/2 flex items-center justify-center md:justify-end cursor-pointer">
            <div className="flex-col gap-0">
            <h2 className="text-right cursor-pointer pb-0">Записаться на пробное занятие</h2>
            <p className="text-right italic pt-0 text-dark/75 cursor-pointer">начало занятий с 12 августа</p>
            </div>
            </div>

            <div className='flex flex-row gap-5 py-5 md:w-1/2 justify-center md:justify-start'>
                {MessageData.map(({ id, icon, href }) => (
                    <a href={href} key={id}><Image src={icon} alt='Записаться на пробное занятие' width={100} height={100}
                        className='w-16 hover:scale-105 transition-all'
                    /></a>
                ))}
            </div>



        </div>
    </>



);

export default Massage