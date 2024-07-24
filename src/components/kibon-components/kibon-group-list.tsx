import { use } from "react";
import Link from "next/link";
import { IKibon } from "@/interfaces/kibon";
import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");
export async function getKibon(kisul_group: string, kisul: string) {
   pbClient.autoCancellation(false);
   const results = await pbClient.collection("kibon").getFullList<IKibon>({
      requestKey: "kibon",
      sort: "kibon_group",
      filter: `kibon_group = "${kisul_group}"`,
   });
   return results;
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const KibonList = ({ kisul_group, kisul }: { kisul_group: string, kisul: string }) => {
   const res = use(getKibon(kisul_group, kisul));
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