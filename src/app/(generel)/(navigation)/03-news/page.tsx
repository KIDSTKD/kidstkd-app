
import PaginatedNews from "@/components/news-components/paginated-news";

import SearchBar from "@/hooks/search-bar";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function News({ searchParams }: any) {

  const aaa = searchParams.page

  return (
    <>
      <PaginatedNews pagenumber={aaa} perpage={12} />

      {aaa}

    </>
  );
}
