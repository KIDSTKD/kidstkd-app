import { use } from "react";
import Image from "next/image";
import Link from "next/link";

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

import { IItemsCards } from "@/interfaces/items-cards";

export async function getGear(gearId: string) {
   pbClient.autoCancellation(false);
   const results = await pbClient.collection("06_gear").getOne<IItemsCards>(`${gearId}`, {});
   return results;
}

export const dynamic = "force-dynamic";
export const revalidate = 1;

const GearPageComp = ({ gearId }: { gearId: string }) => {
   const res = use(getGear(gearId));

   return (
      <div className="flex flex-col">
         <h1>{res.title}</h1>

               <Image
               src={pbClient.files.getUrl(res, res.img[0], { thumb: "360x240" })}
               alt={res.title}
               width={360}
               height={240}
               className="w-full lg:w-80 float-right lg:p-2 rounded object-cover"
            />

            <p>{res.description}</p>


      </div>

         
   );
};

export default GearPageComp;
