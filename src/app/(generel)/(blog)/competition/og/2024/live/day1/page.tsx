import Heading from "@/components/ui/heading";
import LinkSpan from "@/components/ui/link-span";

import DaysNavi from "../days-navi";

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
         <DaysNavi />

         <h4>Предварительные поединки</h4>
         <iframe
         className="w-full aspect-video"
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/86d00f7ffdbc5f62acb4494b0987fefe/?p=CFyqbnNK6ecRUhqPIbou4g"
            frameBorder="0"
            allow="clipboard-write; autoplay"
            allowFullScreen
         ></iframe>
         <h4>Полуфиналы</h4>
         <iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452590" width="640" height="320"></iframe>
         <h4>Финальные поединки</h4>
         <iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452659" width="640" height="320"></iframe>
      </>
   );
}
