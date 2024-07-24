import { use } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Pagination from '../../ui/pagination';

import { IPost } from '@/interfaces/posts';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

export async function getPosts(pagenumber: number, perpage: number) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('05_posts').getList<IPost>(pagenumber, perpage, {
    requestKey: 'posts',
    sort: '-post_id',
  });

  return results;

};

export const dynamic = 'force-dynamic'
export const revalidate = 1

const PaginatedPosts = ({ pagenumber, perpage, withPagination }: {
  pagenumber: number,
  perpage: number,
  withPagination: boolean,

}) => {

  const res = use(getPosts(pagenumber, perpage))

  const pag = res.items



  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">

        {pag.map((posts: IPost) => (

          <article key={posts.id}>
            <Link href={`/posts/${posts.id}`}>
              <Image src={pbClient.files.getUrl(posts, posts.images[0], { 'thumb': '360x240' })} alt={posts.title} width={360} height={240} className='w-full aspect-[3/2] object-cover' />
              <div className='truncate bg-light opacity-80
                      text-gray font-bebasRegular text-2xl text-center p-2
                      select-none cursor-default
      '>{posts.title}</div>
              <p className='h-20 overflow-y-hidden'>{posts.description}</p>

            </Link>
          </article>
        ))}
      </div>

      <Pagination totalPages={res.totalPages} link='/05-taekwondo/blog' withPagination={withPagination} />


    </>
  );
}

export default PaginatedPosts;

