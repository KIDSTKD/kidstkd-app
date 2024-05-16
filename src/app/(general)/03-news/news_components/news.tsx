import { use } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

interface INews {
  id: string;
  EventYear: number;
  EventDate: string;
  EventName: string;
  EventDescription: string;
  EventText: string;
  image: string;
}

pbClient.autoCancellation(false);


export async function getNews() {

  const results = await pbClient.collection('03_news').getFullList<INews>({
    requestKey: 'news',
    sort: '-date',
  });

  return results;
};

const NewsComponent = () => {

  const res = use(getNews())

  return (
    <>
      <h1>Новости</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">

        {res.map((news: any) => (

          <article key={news.EventName}>
            <Link href='link'>
              <Image src={news.image} alt={news.EventName} width={360} height={240} className='w-full aspect-[3/2] object-cover' />
              <div className='truncate bg-light opacity-80
                      text-gray font-bebasRegular text-2xl text-center p-2
                      select-none cursor-default
      '>{news.EventName}</div>
              <p className='h-20 overflow-y-hidden'>{news.EventDescription}</p>
            </Link>
          </article>




        ))}
      </div>

    </>
  );
}

export default NewsComponent;



{/* <div dangerouslySetInnerHTML={{ __html: news.EventText }} /> */ }
