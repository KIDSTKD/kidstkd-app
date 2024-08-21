import Link from "next/link";
import Image from "next/image";

import YT from '../../../../../public/icons/social/yt.svg'
import VK from '../../../../../public/icons/social/vk.svg'
import TG from '../../../../../public/icons/social/tg.svg'
import INST from '../../../../../public/icons/social/inst.svg'




import { Metadata } from "next";
const headerTitle = "Тхэквондо в Уссурийске";
export const metadata: Metadata = {

   alternates: {
      canonical: "https://kidstkd.ru/social",
   },
};

const SocialeData = [
   { id: 1, icon: YT, href: 'https://www.youtube.com/@kidstkdtaekwondo2028' },
   { id: 2, icon: TG, href: 'https://t.me/kidstkdru' },
   { id: 3, icon: VK, href: 'https://vk.com/kidstkdru' },
   { id: 4, icon: INST, href: 'https://www.instagram.com/kidstkd' },
]


export default function Home() {
   return (
      <>
<div className='flex flex-row gap-10 py-5 md:w-1/2 justify-center md:justify-start p-10'>
{SocialeData.map(({ id, icon, href }) => (
    <a href={href} key={id}><Image src={icon} alt='Иконка Социальной сети' width={100} height={100}
        className='w-16 hover:scale-105 transition-all'
    /></a>
))}
</div>
</>
   );
}
