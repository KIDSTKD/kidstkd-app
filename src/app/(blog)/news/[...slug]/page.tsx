import { use } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

interface INews {
  id: string;
  EventYear: number;
  EventMounth: string;
  EventDays: string;
  EventDate: string;
  EventName: string;
  EventDescription: string;
  EventText: string;
  image: string;
}

export async function getNews() {
  pbClient.autoCancellation(false)
  const record = await pbClient.collection('03_news').getFirstListItem('EventYear="2023"', {

  });


  return record;

};

export const dynamic = 'force-dynamic'
export const revalidate = 1


const NewsComponent = () => {

  const news = use(getNews())



  return (
    <>


      <article key={news.id}>
        <h1>{news.EventName}</h1>

        <Image src={pbClient.files.getUrl(news, news.image, { 'thumb': '360x240' })} alt={news.EventName} width={360} height={240} className='w-full aspect-[3/2] object-cover' />
        <div className='truncate bg-light opacity-80
                      text-gray font-bebasRegular text-2xl text-center p-2
                      select-none cursor-default
      '>{news.EventName}</div>
        <div dangerouslySetInnerHTML={{ __html: news.EventText }} />
      </article>

    </>
  );
}

export default NewsComponent;



