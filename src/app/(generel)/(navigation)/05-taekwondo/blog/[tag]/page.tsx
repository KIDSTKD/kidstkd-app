import Heading from "@/components/ui/heading";
import TagPosts from "@/components/posts-components/tags-posts";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function Blog({ searchParams }: any) {

  const page = searchParams.page

  return (
    <>
      <Heading text="Публикации" />
      {/* <TagPosts tag="pss"  /> */}
    </>
  );
}


