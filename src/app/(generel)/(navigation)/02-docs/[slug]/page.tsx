import Heading from "@/components/ui/heading";
import { DocData } from "@/layout/nav/navigation-data";
import DocBlock from "@/components/docs-components/docBlock";

import { Metadata, ResolvingMetadata } from 'next'
const headerTitle = 'Документы'
type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const fullId = params.slug
  const id = fullId.slice(-0, 2)
  const doscId = 20 + Number(id)
  const titleMeta = DocData.find(item => item.id === doscId);

  return {
    title: headerTitle + ' | ' + titleMeta?.title,
    description: titleMeta?.title + ' | KIDSTKD',
    alternates: {
      canonical: 'https://kidstkd.ru/' + params.slug,
    },
  }
}

async function getData(slug: string) {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/${slug}`, { next: { revalidate: 10 } });

  return res.json();
}

export default async function Docs({
  params: { slug },
}: {
  params: { slug: string }

}) {

  const docsId = slug.slice(-0, 2)
  const id = 20 + Number(docsId)
  const subHeader = DocData.find(item => item.id === id);

  const table = await getData(slug);

  return (
    <>
      <Heading text={subHeader?.title} />

      {table.map((posts: any) => (
        <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />

      ))}
    </>
  )
}


