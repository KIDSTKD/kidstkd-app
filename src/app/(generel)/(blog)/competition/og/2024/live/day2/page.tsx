import Heading from "@/components/ui/heading";

import DaysNavi from "../days-navi";

import { Metadata } from "next";
const headerTitle = "Прямая трансляция ОИ2024 - день 2 (М-68, Ж-57)";
export const metadata: Metadata = {
   title: headerTitle,
   description: "Прямая трансляция (мужчины -68кг, женщины -57 кг)",
   openGraph: {
      images: "/img/blog/competition/og/2024/live.jpg",
      title: headerTitle,
      description: "Прямая трансляция (мужчины -68кг, женщины -57 кг)",
      url: "https://kidstkd.ru/competition/og/2024/live/day2",
   },
   alternates: {
      canonical: "https://kidstkd.ru/competition/og/2024/live/day2",
   },
};

export default function OG2024() {
   return (
      <>
         <Heading text={headerTitle} />
         <DaysNavi />

         <h4>Предварительные поединки</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452774" width="640" height="320"></iframe>
<h4>Полуфиналы</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452874" width="640" height="320"></iframe>
<h4>Финальные поединки</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452960" width="640" height="320"></iframe>
           
      </>
   );
}
