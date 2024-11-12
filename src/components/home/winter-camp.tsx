import Image from "next/image";
import Link from "next/link";

import WinterCampLogo from '../../../public/img/banners/winter-camp/logo.svg'
import KIDSTKD from "../../../public/layout/kidstkd.svg"
import Barcy from "../../../public/img/logo/barcy.svg"

const WinterCampBanner = () => (
    <>
        <div className='w-full bg-winterCamp bg-cover aspect-[3/1] grid grid-cols-3'>
        <div className="flex flex-col gap-5 justify-center items-center">
        <Link href="/" passHref className='w-2/3 flex items-center bg-linkblue justify-center  cursor-pointer hover:scale-105 transition-transform'>
            <Image src={KIDSTKD} alt='Тхэквондо в Уссурийске' width={360} height={142}
                className='
                           '/>
            </Link>
            

            <a target="new" href='https://t.me/taekwondokhv' className="cursor-pointer w-1/2">
                <Image src={Barcy} alt='СК Барсы' className=" hover:scale-105 transition-transform"/>
            </a>
        </div>

            <div className="flex flex-col gap-10 pt-16 items-center justify-center">
                <div className="flex flex-col font-bebasRegular text-winterdark text-center">
                    <div className="text-3xl">Учубно-тренировочные сборы</div>
                    <div className="text-5xl  border-b-4 border-winterlightblue tracking-widest
                    ">Восток - 2025</div>
                    <div className="text-4xl">Хабаровский край</div>
                </div>
                
                <div className="font-bebasLight text-2xl text-winterdark">2-8 января 2025</div>

            </div>
            <div className="flex items-center cursor-pointer hover:scale-105 transition-transform">
            <Image src={WinterCampLogo} alt="УТС ВОСТОК 2025"
            className="p-5"
            />
            </div>
        </div>
    </>



);

export default WinterCampBanner