import Heading from "@/components/ui/heading";

import { getNews } from "@/components/news-components/paginated-news";
import { use } from 'react'


import PaginatedNews from "@/components/news-components/paginated-news";
import Pagination from "@/components/ui/pagination";

export const dynamic = 'force-dynamic'
export const revalidate = 1

import { Metadata } from 'next'
const headerTitle = 'Новости'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' - KIDSTKD',
  alternates: {
    canonical: 'https://kidstkd.ru/03-news/',
  },
}

export default function News({ searchParams, pagenumber, perpage }: {
  searchParams: number | any,
  pagenumber: number,
  perpage: number,
}) {

  const page = searchParams.page

  const res = use(getNews(pagenumber, perpage))




  return (
    <>
      <Heading text="Новости" />
      <PaginatedNews pagenumber={page} perpage={12} />
      <Pagination totalPages={res.totalPages} link='/03-news' />
      {res.totalPages} - {res.totalItems}
    </>
  );
}




