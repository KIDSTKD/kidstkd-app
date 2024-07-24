import { use } from "react";
import Link from "next/link";
import { IKibon } from "@/interfaces/kibon";
import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");
export async function getKibon(kibon_group: string) {
   pbClient.autoCancellation(false);
   const results = await pbClient.collection("kibon").getFullList<IKibon>({
      requestKey: "kibon",
      sort: "kibon_group",
      filter: `kibon_group = "${kibon_group}"`,
   });
   return results;
}

// export const dynamic = "force-dynamic";
// export const revalidate = 3600;

const KibonList = ({ kibon_group }: { kibon_group: string }) => {
   const res = use(getKibon(kibon_group));
   return (
      <>
         {res.map((kibon: IKibon) => (
            <Link href={`/kibon/${kibon.id}`} key={kibon.kibon_group}>
               <p className="indent-0 pl-14 cursor-pointer hover:underline">{kibon.kibon}</p>
            </Link>
         ))}
      </>
   );
};
export default KibonList;