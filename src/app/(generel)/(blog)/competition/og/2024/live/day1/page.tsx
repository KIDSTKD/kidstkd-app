import Heading from "@/components/ui/heading";
import Image from "next/image";

import { Metadata } from "next";
const headerTitle = "Прямая трансляция ОИ2024 - день 1 (М-58, Ж-49)";
export const metadata: Metadata = {
   title: headerTitle,
   description: "Прямая трансляция (мужчины -58кг, женщины -49 кг)",
   openGraph: {
      images: "/img/blog/competition/og/2024/live.jpg",
      title: headerTitle,
      description: "Прямая трансляция (мужчины -58кг, женщины -49 кг)",
      url: "https://kidstkd.ru/competition/og/2024/live/day1",
   },
   alternates: {
      canonical: "https://kidstkd.ru/competition/og/2024/live/day1",
   },
};

export default function OG2024() {
   return (
      <>
         <Heading text={headerTitle} />

<iframe className="w-full" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452535" width="1280" height="720"></iframe>
        
      </>
   );
}
