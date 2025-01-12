import Image from "next/image";
import Link from "next/link";

import TG from '../../../public/img/05-kibon/tg.jpg'
import TG_cover from '../../../public/img/05-kibon/tg_cover_center.png'

const KibonTGLink = () => {
   return (
      <>
      <Link className="cursor-pointer" href={"https://t.me/+wsiWXo9bLqg0NjBi"}>
         <div className="w-full h-40 bg-kibon bg-no-repeat bg-cover flex flex-row justify-between">
            <Image src={TG_cover} className="w-40 h-40 rounded-full p-2" width={160} height={160} alt={"Кибон"}/>
            <div className="flex flex-col items-center">
            <h1 className="text-light indent-0 text-center cursor-pointer">КИБОН | Техника тхэквондо</h1>
            <p className="indent-0 text-center text-light cursor-pointer">Телеграм-канал о базовой технике тхэквондо </p>
            </div>
            <Image src={TG} className="w-40 h-40 rounded p-2" width={160} height={160} alt={"Кибон"}/>
         </div>
         </Link>
      </>

   );
};
export default KibonTGLink;