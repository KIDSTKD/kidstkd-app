import Heading from "@/components/ui/heading";
import { Metadata } from "next";
import Link from "next/link";
const headerTitle = "Удары (чхаги)";
export const metadata: Metadata = {
   title: headerTitle,
   description: headerTitle + " - KIDSTKD",
};

export default function Chagi() {
   return (
      <>
         <Heading text={headerTitle} />
         <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
               <Link href="/kibon/gonggyeog-gisul/chagi/ollyeochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Оллё чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/apchagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Ап чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/dollyeochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Толлё чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/yeopchagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Ёп чхаги</h5>
                     <p className="indent-12 cursor-pointer">Твитора ёп чхаги</p>
                     <p className="indent-12 cursor-pointer">Висан ёп чхаги (Висантхыль ёп чхаги)</p>
                     <p className="indent-12 cursor-pointer">Кодып ёп чхаги</p>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/dwichagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Тви чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/huryeochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Хурё чхаги</h5>
                     <p className="indent-12 cursor-pointer">Ап хурё чхаги</p>
                     <p className="indent-12 cursor-pointer">Тви хурё чхаги</p>
                  </div>
               </Link>
            </div>
            <div>
               <Link href="/kibon/gonggyeog-gisul/chagi/naeryeochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Нэрё чхаги</h5>
                     <p className="indent-12 cursor-pointer">Читччикхи</p>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/anchagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Ан чхаги</h5>
                     <p className="indent-12 cursor-pointer">Пхёчжок ан чхаги</p>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/bakkatchagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Паккат чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/mireochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Миро чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/nakkachagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Накка чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/biteureochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Питхыро чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/gulleochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Кулльо чхаги</h5>
                  </div>
               </Link>
               <Link href="/kibon/gonggyeog-gisul/chagi/balbutyeochagi">
                  <div className="hover:underline hover:bg-subblue hover:bg-opacity-25">
                     <h5 className="cursor-pointer">Пальпучё чхаги</h5>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}
