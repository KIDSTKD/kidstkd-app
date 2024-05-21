import NNN from "./nnn";

const NewsComponent = ({ params }: { params: { year: any } }) => {




  return (
    <>
      <NNN dataY={params.year} />
    </>
  );
}

export default NewsComponent;



{/* <div dangerouslySetInnerHTML={{ __html: news.EventText }} /> */ }
