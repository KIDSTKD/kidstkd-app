import PaginatedNews from "@/components/news-components/pagination";

import SearchBar from "@/hooks/search-bar";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function News() {
  return (
    <>
      <PaginatedNews pagenumber={1} perpage={12} />

      <SearchBar />



    </>
  );
}
