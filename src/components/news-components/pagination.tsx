
import { use } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { INews } from '@/interfaces/news';

import PocketBase from "pocketbase";

export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

export async function getNews(pagenumber: number, perpage: number) {

  pbClient.autoCancellation(false)
  const results = await pbClient.collection('03_news').getList<INews>(pagenumber, perpage, {
    requestKey: 'news',
    sort: '-Date',
  });

  return results;

};

export const dynamic = 'force-dynamic'
export const revalidate = 1


const PaginatedNews = ({ pagenumber, perpage }: {
  perpage: number,
  pagenumber: number
}) => {

  const res = use(getNews(pagenumber, perpage))
  const pag = res.items

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">

        {pag.map((news: INews) => (

          <article key={news.id}>
            <Link href={`/news/${news.id}`}>
              <Image src={pbClient.files.getUrl(news, news.gallary[0], { 'thumb': '360x240' })} alt={news.EventName} width={360} height={240} className='w-full aspect-[3/2] object-cover' />
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

export default PaginatedNews;

