import { use } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { IPost } from '@/interfaces/posts';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

export const dynamic = 'force-dynamic'
export const revalidate = 1

export async function getPosts(tag: string) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('05_posts').getList<IPost>(1, 50, {
    requestKey: 'tag',
    expand: 'tags',
    filter: `tag.tag?="${tag}"`

  });

  return results;

};

const TagPosts = ({ tag }: {
  tag: string,

}) => {

  const res = use(getPosts(tag))
  const a = res.items

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">

        {a.map((posts: IPost) => (

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



    </>
  );
}

export default TagPosts;

