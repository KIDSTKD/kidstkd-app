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



export default function Home() {
   return (
      <div className="grid grid-cols-4 gap-10">
        <Link href='https://www.youtube.com/@kidstkdtaekwondo2028' target='_blank' passHref>
        <Image src={YT} alt={"Youtube"} className="w-full p-10"/>
         </Link>
         <Link href='https://vk.com/kidstkdru' target='_blank' passHref>
         <Image src={VK} alt={"VK"} className="w-full p-10"/>
         </Link>
         <Link href='https://t.me/kidstkdru' target='_blank' passHref>
         <Image src={TG} alt={"Telegram"} className="w-full p-10"/>
         </Link>
         <Link href='https://www.instagram.com/kidstkd' target='_blank' passHref>
         <Image src={INST} alt={"Instagram"} className="w-full p-10"/>
         </Link>
         </div>
   );
}
