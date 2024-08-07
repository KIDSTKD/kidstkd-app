import Heading from "@/components/ui/heading";

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

         <h4>Предварительные поединки</h4>
         <iframe src="https://vk.com/video_ext.php?oid=-211669815&id=456245015&hd=2&autoplay=1" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"></iframe>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452535" width="640" height="320"></iframe>
<h4>Полуфиналы</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452590" width="640" height="320"></iframe>
<h4>Финальные поединки</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452659" width="640" height="320"></iframe>
           
      </>
   );
}
