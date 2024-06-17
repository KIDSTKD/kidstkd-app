import Heading from "@/components/ui/heading";
import PaginatedPosts from "@/components/posts-components/paginated-posts";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function Blog({ searchParams }: any) {

  const page = searchParams.page

  return (
    <>
      <Heading text="Публикации" />
      <PaginatedPosts pagenumber={page} perpage={12} withPagination={true} />
    </>
  );
}


