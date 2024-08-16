import Heading from "@/components/ui/heading";
import TagPosts from "@/components/posts-components/tags-posts";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function Blog({ params }: { params: { tag: number } }) {


  return (
    <>
      <Heading text={"Публикации " + "#" + params.tag} />
      <TagPosts tag="pss"  />
    </>
  );
}


