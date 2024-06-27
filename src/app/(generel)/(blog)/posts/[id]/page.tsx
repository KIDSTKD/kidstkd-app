import SinglePost from "@/components/posts-components/single-post";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function PostPage({ params }: { params: { id: string } }) {

  return (
    <>
      <SinglePost postId={params.id} />
    </>
  );
}

