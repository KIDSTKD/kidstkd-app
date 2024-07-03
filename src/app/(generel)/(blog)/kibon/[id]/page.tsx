import Kibon from "@/components/kibon-components/single-kibon";
import KibonNavigation from "@/components/kibon-components/kibon-navigation";

import { getKibon } from "./get-kibon";



import { Metadata } from 'next'
 
type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  const post = getKibon(params)
 

 
  return {
    title: (await post).kibon,

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
