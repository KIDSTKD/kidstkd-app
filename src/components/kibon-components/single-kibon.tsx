import { use } from "react";
import Image from "next/image";
import Link from "next/link";

import { IKibon } from "@/interfaces/kibon";

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

export async function getKibon(postId: string) {
   pbClient.autoCancellation(false);
   const results = await pbClient.collection("05_kibon").getOne<IKibon>(`${postId}`, {});
   return results;
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const Kibon = ({ kibonId }: { kibonId: string }) => {
   const res = use(getKibon(kibonId));

   return (
      <>
         <h1>{res.kibon}</h1>
         <article key={res.id}>
            <Link href={`https://kidstkd.pockethost.io/api/files/05_kibon/${res.id}/${res.img}`}>
               <Image
                  src={pbClient.files.getUrl(res, res.img[0], { thumb: "320x200" })}
                  alt={res.kibon}
                  width={360}
                  height={240}
                  className="w-full lg:w-80 float-right lg:p-2 rounded object-cover"
               />
            </Link>
            <h4>Описание</h4>
            <div dangerouslySetInnerHTML={{ __html: res.description }} />
            <h4>Методика выполнения</h4>
            <div dangerouslySetInnerHTML={{ __html: res.method }} />
            <div dangerouslySetInnerHTML={{ __html: res.etc }} />
         </article>
      </>
   );
};

export default Kibon;
