import Kibon from "@/components/kibon-components/single-kibon";
import KibonNavigation from "@/components/kibon-components/kibon-navigation";


interface PostProps {
   params: {
       id: string
   }
}

import { Metadata } from "next"


export async function generateMetadata({
   params,
}: PostProps): Promise<Metadata> {



   return {
       title: params.id,

   }
}



export default function KibonPage({ params }: { params: { id: string } }) {
   return (
      <>
         <KibonNavigation />
         <Kibon kibonId={params.id} />
      </>
   );
}
