import { use } from 'react'
import Image from 'next/image';
import Link from 'next/link';

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

      <>
        {res.gallary.map((gallary: INews) => (
          <Link key={gallary.id} href={`https://kidstkd.pockethost.io/api/files/5ivpjpyfv12nfus/${res.id}/${gallary}`}
            className='float-left'>
            <Image src={`https://kidstkd.pockethost.io/api/files/5ivpjpyfv12nfus/${res.id}/${gallary}`}
              alt={res.EventName} width={620} height={200}
              className='w-full lg:w-80' />
          </Link>
        ))}

      </>

    </>
  );
}

export default SingleNews;

