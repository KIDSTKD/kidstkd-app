import { use } from 'react'
import Image from 'next/image';

import { IKibon } from '@/interfaces/kibon';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");


export async function getKibon(kibonId: string) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('kibon').getOne<IKibon>(`${kibonId}`, {
  });
  return results;
};

export const dynamic = 'force-dynamic'
export const revalidate = 3600

interface PostProps {
   params: {
      id: string;
      kisul_group: string;
      kisul: string;
   };
}

import { Metadata } from "next";

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {

   const data = await pbClient.collection('kibon').getOne<IKibon>(`${params.id}`, {
   });

   return {
      title: data.kibon,
      description: "Базовая техника: " + data.kibon_group + " - " + data.kibon,
      openGraph: {
         images: `https://kidstkd.pockethost.io/api/files/kibon/${data?.id}/${data.img}`,
         title: data.kibon,
         description: "Базовая техника: " + data.kibon_group + " - " + data.kibon,
         url: 'https://kidstkd.ru/' + params.kisul_group + "/" + params.kisul + "/" + params.id,
     },
     alternates: {
      canonical: 'https://kidstkd.ru/' + params.kisul_group + "/" + params.kisul + "/" + params.id,
  },

   };
}


const Kibon = ({ kibonId }: { kibonId: string }) => {

  const res = use(getKibon(kibonId))


  return (
    <>
      <h1>{res.kibon}</h1>
      <article key={res.id}>
        <Image src={pbClient.files.getUrl(res, res.img[0], { 'thumb': '320x200' })} alt={res.kibon} width={360} height={240}
          className='w-full lg:w-80 float-right lg:p-2 rounded object-cover' />
          <h4>Описание</h4>
        <div dangerouslySetInnerHTML={{ __html: res.description }} />
        <h4>Методика выполнения</h4>
        <div dangerouslySetInnerHTML={{ __html: res.method }} />
        <div dangerouslySetInnerHTML={{ __html: res.etc }} />

      </article>


    </>
  );
}

export default Kibon;
