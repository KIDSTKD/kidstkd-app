import Image from "next/image";
import Link from "next/link";

import img1 from '../../../public/tkd-banner/01.svg'
import img2 from '../../../public/tkd-banner/02.svg'
import img3 from '../../../public/tkd-banner/03.svg'
import img4 from '../../../public/tkd-banner/04.svg'
import Equip from '../../../public/img/06-gear/01.png'
import MS from '../../../public/img/02-docs/03-orders/ms.png'
import SS1K from '../../../public/img/02-docs/03-orders/1sk.png'


const TKDBanner = () => (
    <>
        <div className='w-full bg-blue 
                        gap-1 md:gap-2 lg:gap-3 
                        p-1 lg:p-2
                        grid grid-cols-2 lg:grid-cols-4'>
            <Image src={img1} alt='KIDSTKD' className='w-full' />
            <Link href='/02-docs/01-regulations'><Image src={img2} alt='KIDSTKD' className='w-full' /></Link>
            <Link href='/02-docs/03-orders' className="relative">
                <Image src={img3} alt='KIDSTKD' className='w-full' />
                <Image src={MS} alt='KIDSTKD' width={40} height={40} className='absolute bottom-[2%] right-[2%] w-1/3' />
                <Image src={SS1K} alt='KIDSTKD' width={40} height={40} className='absolute top-0 left-[4%] w-[30%]' />

            </Link>
            <Link href='/06-gear' className="relative">
                <Image src={img4} alt='KIDSTKD' className='w-full' />
                <Image src={Equip} alt='KIDSTKD' width={80} height={80} className='absolute top-0 right-[4%] w-[48%]' />
            </Link>
        </div>
    </>



);

export default TKDBanner