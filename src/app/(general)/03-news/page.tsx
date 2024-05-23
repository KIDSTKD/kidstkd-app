import NewsComponent from "./news_components/news";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function News() {
  return (
    <>
      <NewsComponent />
    </>
  );
}
