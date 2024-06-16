import Heading from "@/components/ui/heading";
import NewsByYearComponent from "@/components/news-components/news-by-year";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function News({ params }: { params: { year: number } }) {

  return (
    <>
      <Heading text={'Новости' + " - " + params.year} />
      <NewsByYearComponent year={params.year} />
    </>
  );
}
