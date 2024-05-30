import AllNews from "@/components/news/all-news";

export const dynamic = 'force-dynamic'
export const revalidate = 1

export default function News() {
  return (
    <>
      <AllNews />
    </>
  );
}
