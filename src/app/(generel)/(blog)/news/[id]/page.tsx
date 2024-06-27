import SingleNews from "@/components/news-components/single-news";

export default function NewsPage({ params }: { params: { id: string } }) {

  return (
    <>
      <SingleNews newsId={params.id} />
    </>
  );
}

