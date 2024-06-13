import SingleNews from "@/components/news-components/single-news";

const NewsComponent = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <SingleNews newsId={params.id} />
    </>
  );
}

export default NewsComponent;
