import NewsByYearComponent from "../../../../components/news/news-by-year";
export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function News({ params }: { params: { year: number } }) {
  return (
    <>
      <NewsByYearComponent year={params.year} />
    </>
  );
}
