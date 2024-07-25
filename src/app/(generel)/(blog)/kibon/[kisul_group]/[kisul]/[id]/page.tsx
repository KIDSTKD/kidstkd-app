import Kibon from "@/components/kibon-components/single-kibon";
import KibonNavigation from "@/components/kibon-components/kibon-navigation";

import { IKibon } from '@/interfaces/kibon';
import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

// interface PostProps {
//    params: {
//       id: string;
//       kisul_group: string;
//       kisul: string;
//    };
// }

// import { Metadata } from "next";

// export async function generateMetadata({ params }: PostProps): Promise<Metadata> {

//    const data = await pbClient.collection('kibon').getOne<IKibon>(`${params.id}`, {
//    });

//    return {
//       title: data.kibon,
//       description: "Базовая техника: " + data.kibon_group + " - " + data.kibon,
//       openGraph: {
//          images: `https://kidstkd.pockethost.io/api/files/kibon/${data?.id}/${data.img}`,
//          title: data.kibon,
//          description: "Базовая техника: " + data.kibon_group + " - " + data.kibon,
//          url: 'https://kidstkd.ru/' + params.kisul_group + "/" + params.kisul + "/" + params.id,
//      },
//      alternates: {
//       canonical: 'https://kidstkd.ru/' + params.kisul_group + "/" + params.kisul + "/" + params.id,
//   },

//    };
// }

export default function KibonPage({ params }: { params: { id: string } }) {

   return (
      <>
         <KibonNavigation />
         <Kibon kibonId={params.id} />
       
      </>
   );
}
