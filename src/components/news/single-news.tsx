import { use } from 'react'
import Image from 'next/image';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

import { INews } from '@/interfaces/news';



export async function getNews(newsId: string) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('03_news').getOne<INews>(`${newsId}`, {
  });
  return results;
};

export const dynamic = 'force-dynamic'
export const revalidate = 1


const SingleNews = ({ newsId }: { newsId: string }) => {

  const res = use(getNews(newsId))


  return (
    <>
      <h1>{res.EventName}</h1>


      <article key={res.id}>
        <Image src={pbClient.files.getUrl(res, res.gallary[0], { 'thumb': '360x240' })} alt={res.EventName} width={360} height={240}
          className='w-80 float-right lg:p-2 rounded aspect-[3/2] object-cover' />
        <div dangerouslySetInnerHTML={{ __html: res.EventText }} />
      </article>

      <div className='flex flex-col'>
        <>
          <Image src={pbClient.files.getUrl(res, res.gallary[0], { 'thumb': '360x240' })} alt={res.EventName} width={360} height={240}
            className='w-80 float-right lg:p-2 rounded aspect-[3/2] object-cover' />
          <Image src={pbClient.files.getUrl(res, res.gallary[1], { 'thumb': '360x240' })} alt={res.EventName} width={360} height={240}
            className='w-80 float-right lg:p-2 rounded aspect-[3/2] object-cover' />

        </>

      </div>
    </>
  );
}

export default SingleNews;
