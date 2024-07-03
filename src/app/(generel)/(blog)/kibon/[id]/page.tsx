import Kibon from "@/components/kibon-components/single-kibon";
import KibonNavigation from "@/components/kibon-components/kibon-navigation";


import { use } from 'react'
import { IKibon } from '@/interfaces/kibon';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");


export async function getKibon(params: {id: string}) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('kibon').getOne<IKibon>(`${params.id}`, {
  });
  return results;
};




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
