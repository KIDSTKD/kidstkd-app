import Heading from "@/components/ui/heading";

import KibonGroupList from "@/components/kibon-components/kibon-group-list";

interface PostProps {
   params: {
      id: string;
      kisul_group: string;
      kisul: string;
   };
}

import { Metadata } from "next";

const KisulData = [
   {id:1, kisul: "maggi", tech: "Макки", decsp: "Блоки"},
]

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
   const data = await fetch(`https://kidstkd.pockethost.io//api/collections/kibon/records/${params.id}`).then((res) => res.json());

   const meta = KisulData.find(item => item.kisul === params.kisul);


   return {
      title: meta?.tech + " (" + meta?.decsp + ")" + " - Терминология: Базовая техника",
      description: meta?.tech + " (" + meta?.decsp + ")" + " - Терминология: Базовая техника",
      openGraph: {
         // images: `https://kidstkd.pockethost.io/api/files/kibon/${data?.id}/${data.img}`,
         title: meta?.tech + " (" + meta?.decsp + ")" + " - Терминология: Базовая техника",
         description: meta?.tech + " (" + meta?.decsp + ")" + " - Терминология: Базовая техника",
         url: "https://kidstkd.ru/05-taekwondo/terminology/" + params.kisul,
      },
      alternates: {
         canonical: "https://kidstkd.ru/05-taekwondo/terminology/" + params.kisul,
      },
   };
}

export default function Taekwondo({ params }: PostProps) {

   const meta = KisulData.find(item => item.kisul === params.kisul);

   return (
      <>
         <Heading text={"Терминология: " + meta?.tech + " (" + meta?.decsp + ")"}/>
         <KibonGroupList kisul_group={params.kisul_group} kisul={params.kisul} />
 
      </>
   );
}
