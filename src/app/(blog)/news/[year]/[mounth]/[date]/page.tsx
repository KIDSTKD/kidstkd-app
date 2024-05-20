import { use } from 'react'
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
  const results = await pbClient.collection('03_news').getFirstListItem<INews>('EventYear="2023"', {
  });


  return results;

};

export const dynamic = 'force-dynamic'
export const revalidate = 1


const NewsComponent = () => {

  const res = use(getNews())



  return (
    <>
      <h1>{res.EventName}</h1>


      <article key={res.id}>
        <Image src={pbClient.files.getUrl(res, res.image, { 'thumb': '360x240' })} alt={res.EventName} width={360} height={240}
          className='w-80 float-right lg:p-2 rounded aspect-[3/2] object-cover' />
        <div dangerouslySetInnerHTML={{ __html: res.EventText }} />

      </article>
    </>
  );
}

export default NewsComponent;



{/* <div dangerouslySetInnerHTML={{ __html: news.EventText }} /> */ }
