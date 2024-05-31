import { use } from 'react'
import Image from 'next/image';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

interface IPost {
  id: string;
  title: string;
  description: string;
  images: string;
  post: string;

}

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
        <Image src={pbClient.files.getUrl(res, res.images[0], { 'thumb': '360x240' })} alt={res.title} width={360} height={240}
          className='w-80 float-right lg:p-2 rounded aspect-[3/2] object-cover' />
        <div dangerouslySetInnerHTML={{ __html: res.post }} />
      </article>

    </>
  );
}

export default SinglePost;
