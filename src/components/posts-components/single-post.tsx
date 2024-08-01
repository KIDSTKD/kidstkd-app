import { use } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '@/interfaces/posts';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");


export async function getPost(postId: string) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('05_posts').getOne<IPost>(`${postId}`, {
  });
  return results;
};

export const dynamic = 'force-dynamic'
export const revalidate = 1


const SinglePost = ({ postId }: { postId: string }) => {

  const res = use(getPost(postId))


  return (
    <>
      <h1>{res.title}</h1>


      <article key={res.id}>
        <Image src={pbClient.files.getUrl(res, res.images[0], { 'thumb': '320x200' })} alt={res.title} width={360} height={240}
          className='w-full lg:w-80 float-right lg:p-2 rounded object-cover' />
        <div dangerouslySetInnerHTML={{ __html: res.post }} />
      </article>
      <>
        {res.images.map((gallary: string) => (
          <Link key={gallary} href={`https://kidstkd.pockethost.io/api/files/05_posts/${res.id}/${gallary}`}
            className='float-left'>
            <Image src={`https://kidstkd.pockethost.io/api/files/05_posts/${res.id}/${gallary}`}
              alt={res.title} width={320} height={200}
              className='w-80 aspect-auto' />
          </Link>
        ))}

      </>

    </>
  );
}

export default SinglePost;
