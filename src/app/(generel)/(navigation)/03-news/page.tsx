import PaginatedNews from "@/components/news-components/paginated-news";

import SearchBar from "@/hooks/search-bar";

export const dynamic = 'force-dynamic'
export const revalidate = 1


export default function News() {


  const pagi = Number(SearchBar) | 1


  return (
    <>
      <PaginatedNews pagenumber={pagi} perpage={12} />

      <SearchBar /> - сёрч бар



    </>
  );
}
