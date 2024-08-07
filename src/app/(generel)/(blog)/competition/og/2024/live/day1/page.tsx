import Heading from "@/components/ui/heading";
import Image from "next/image";

import { Metadata } from "next";
const headerTitle = "Прямая трансляция ОИ2024 - тхэквондо";
export const metadata: Metadata = {
   title: headerTitle,
   description: "Тхэквондо на летних Олимпийских играх 2024",
   openGraph: {
      images: "/img/blog/competition/og/2024/mascot.png",
      title: headerTitle,
      description: "Тхэквондо на летних Олимпийских играх 2024",
      url: "https://kidstkd.ru/competition/og/2024",
   },
   alternates: {
      canonical: "https://kidstkd.ru/competition/og/2024",
   },
};

export default function OG2024() {
   return (
      <>
         <Heading text={headerTitle} />
         <Image
            src="/img/blog/competition/og/2024/mascot.png"
            alt={headerTitle}
            width={360}
            height={240}
            className="w-full lg:w-80 float-right lg:p-2 rounded object-cover"
         />

<iframe src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452535" width="640" height="360"></iframe>
        
      </>
   );
}
