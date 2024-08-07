import Heading from "@/components/ui/heading";

import { Metadata } from "next";
const headerTitle = "Прямая трансляция ОИ2024 - день 3 (М+80, Ж+67)";
export const metadata: Metadata = {
   title: headerTitle,
   description: "Прямая трансляция (мужчины +80кг, женщины +67 кг)",
   openGraph: {
      images: "/img/blog/competition/og/2024/live.jpg",
      title: headerTitle,
      description: "Прямая трансляция (мужчины +80кг, женщины +67 кг)",
      url: "https://kidstkd.ru/competition/og/2024/live/day4",
   },
   alternates: {
      canonical: "https://kidstkd.ru/competition/og/2024/live/day4",
   },
};

export default function OG2024() {
   return (
      <>
         <Heading text={headerTitle} />

         <h4>Предварительные поединки</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6453060" width="640" height="320"></iframe>
<h4>Полуфиналы</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6453136" width="640" height="320"></iframe>
<h4>Финальные поединки</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6453204" width="640" height="320"></iframe>
           
      </>
   );
}
