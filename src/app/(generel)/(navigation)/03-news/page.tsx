
import PaginatedNews from "@/components/news-components/paginated-news";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function News({ searchParams }: any) {

  const page = searchParams.page

  return (
    <>
      <PaginatedNews pagenumber={page} perpage={12} />
    </>
  );
}
