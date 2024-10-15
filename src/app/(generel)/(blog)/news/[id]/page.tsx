import SingleNews from "@/components/news-components/single-news";

interface PostProps {
  params: {
     id: string;
     EventName: string;
     EventDescription: string;
     gallary: string;

  };
}

export const revalidate = 3600


import { Metadata } from "next";

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
   const data = await fetch(`https://kidstkd.pockethost.io//api/collections/03_news/records/${params.id}`).then((res) => res.json());

   return {
      title: data.EventName,
      description: data.EventDescription,
      openGraph: {
         images: `https://kidstkd.pockethost.io/api/files/03_news/${data?.id}/${data.gallary[0]}`,
         title: data.EventName,
         description: data.EventDescription,
         url: "https://kidstkd.ru/news/" + params.id,
      },
      alternates: {
         canonical: "https://kidstkd.ru/news/" + params.id,
      },
   };
}

export default function NewsPage({ params }: { params: { id: string } }) {

  return (
    <>
      <SingleNews newsId={params.id} />
    </>
  );
}

