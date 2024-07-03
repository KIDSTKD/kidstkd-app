import Kibon from "@/components/kibon-components/single-kibon";
import KibonNavigation from "@/components/kibon-components/kibon-navigation";
import { use } from 'react'

import { Metadata } from "next"

import { IKibon } from '@/interfaces/kibon';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");


export async function getKibon(params: {id: string}) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('kibon').getOne<IKibon>(`${params.id}`, {
  });
  return results;
};

interface PostProps {
  params: {
      id: any,
  }
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = use(getKibon(params.id))



  return {
      title: post.kibon,
      description: post.description,
      openGraph: {
          images: '/img/05/kibon/kibon.png',
          title: post.kibon,
          description: post.description,
          url: 'https://kidstkd.ru/kibon' + post.id,
      },
      alternates: {
          canonical: 'https://kidstkd.ru/kibon' + post.id,
      },
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
