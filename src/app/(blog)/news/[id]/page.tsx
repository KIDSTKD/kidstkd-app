import NNN from "./nnn";

const NewsComponent = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <NNN newsId={params.id} />
    </>
  );
}

export default NewsComponent;
