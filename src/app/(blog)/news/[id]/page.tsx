import SingleNews from "../../../../components/news/single-news";

const NewsComponent = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <SingleNews newsId={params.id} />
    </>
  );
}

export default NewsComponent;
