import Heading from "@/components/ui/heading";
import NewsByYearComponent from "@/components/news-components/news-by-year";

export const dynamic = 'force-dynamic'
export const revalidate = 1

import { Metadata, ResolvingMetadata } from 'next'
const headerTitle = 'Новости'
type Props = {
  params: { year: number }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const year = params.year


  return {
    title: headerTitle + ' - ' + params.year,
    description: headerTitle + ' - ' + params.year + ' | KIDSTKD',
    alternates: {
      canonical: 'https://kidstkd.ru/03-news/' + params.year,
    },
  }
}

export default function News({ params }: { params: { year: number } }) {

  return (
    <>
      <Heading text={'Новости' + " - " + params.year} />
      <NewsByYearComponent year={params.year} />
    </>
  );
}
