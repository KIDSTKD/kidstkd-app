import PaginatedPosts from "@/components/posts-components/pagination";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function Blog() {
  return (
    <>
      <PaginatedPosts />
    </>
  );
}


