import GearPageComp from "@/components/gear-components/gear";

interface PostProps {
   params: {
      id: string;
      title: string;
      description: string;
      img: string;
   };
}

export const revalidate = 100


import { Metadata } from "next";

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
   const data = await fetch(`https://kidstkd.pockethost.io//api/collections/06_gear/records/${params.id}`).then((res) => res.json());

   return {
      title: data.EventName,
      description: data.EventDescription,
      openGraph: {
         images: `https://kidstkd.pockethost.io/api/files/06_gear/${data?.id}/${data.img[0]}`,
         title: data.title,
         description: data.description,
         url: "https://kidstkd.ru/gear/" + params.id,
      },
      alternates: {
         canonical: "https://kidstkd.ru/gear/" + params.id,
      },
   };
}

export default function GearPage({ params }: { params: { id: string } }) {

  return (
    <>
      <GearPageComp gearId={params.id}/>

    </>
  );
}

