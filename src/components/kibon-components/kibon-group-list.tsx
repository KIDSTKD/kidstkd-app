import { use } from "react";
import KibonList from "./kibon-list";
import { IKibon } from "@/interfaces/kibon";
import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");
export async function getKibon(kisul_group: string, kisul: string) {
   const results = await pbClient.collection("kibon_schema").getFullList<IKibon>({
      requestKey: "kibon_list",
      sort: "id",
      filter: `kisul = "${kisul}"`,
   });
   return results;
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const KibonGroupList = ({ kisul_group, kisul }: { kisul_group: string; kisul: string }) => {
   const res = use(getKibon(kisul_group, kisul));
   return (
      <>
         <div className="grid grid-cols-1 lg:grid-cols-2">
            {res.map((kibon: IKibon) => (
               <div key={kibon.id} className=" hover:bg-subblue hover:bg-opacity-25 rounded">
                  <h5 className="cursor-pointer text-left indent-8">{kibon.id}</h5>
                  <KibonList kibon_group={kibon.id} />
               </div>
            ))}
            
            
         </div>
      </>
   );
};
export default KibonGroupList;
