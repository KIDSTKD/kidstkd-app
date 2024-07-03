import Kibon from "@/components/kibon-components/single-kibon";
import KibonNavigation from "@/components/kibon-components/kibon-navigation";


import { IKibon } from '@/interfaces/kibon';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");


type Props = {
  params: { id: string }
}

import { Metadata } from "next";

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const results = await pbClient.collection('kibon').getOne<IKibon>(`${params.id}`, {
  });

  return {
    title: `${results.kibon}`,
   description: `Базовая техника - ${results.kibon_group} - ${results.kibon}`,
   alternates: {
      canonical: `https://kidstkd.ru/kibon/${params.id}`,
   },
  }
};

export default function KibonPage({ params }: { params: { id: string } }) {

  return (
    <>
    <KibonNavigation />
<Kibon kibonId={params.id} />
   </>
  );
}

