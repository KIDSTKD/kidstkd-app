import SingleNews from "./single-news";

const NewsComponent = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <SingleNews newsId={params.id} />
    </>
  );
}

export default NewsComponent;
