import SinglePost from "@/components/posts-components/single-post";

interface PostProps {
  params: {
     id: string;
     title: string;
     description: string;

  };
}

import { Metadata } from "next";

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
   const data = await fetch(`https://kidstkd.pockethost.io//api/collections/05_posts/records/${params.id}`).then((res) => res.json());

   return {
      title: data.title,
      description: data.description,
      openGraph: {
         images: `https://kidstkd.pockethost.io/api/files/05_posts/${data?.id}/${data.img}`,
         title: data.title,
         description: data.description,
         url: "https://kidstkd.ru/posts/" + params.id,
      },
      alternates: {
         canonical: "https://kidstkd.ru/posts/" + params.id,
      },
   };
}

export default function PostPage({ params }: { params: { id: string } }) {

  return (
    <>
      <SinglePost postId={params.id} />
    </>
  );
}

