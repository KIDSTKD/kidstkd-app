import Heading from "@/components/ui/heading";
import PaginatedNews from "@/components/news-components/paginated-news";

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

export default function News({ searchParams }: any) {

  const page = searchParams.page

  return (
    <>
      <Heading text="Новости" />
      <PaginatedNews pagenumber={page} perpage={12} withPagination={true} />
    </>
  );
}