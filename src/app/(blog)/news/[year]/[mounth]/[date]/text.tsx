import { use } from 'react'

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

interface INews {
  id: string;
  EventYear: number;
  EventMounth: string;
  EventDays: string;
  EventDate: string;
  EventName: string;
  EventDescription: string;
  EventText: string;
  image: string;
}

export async function getNews() {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('03_news').getFirstListItem<INews>('EventYear="2023', {
  });


  return results;

};

export const dynamic = 'force-dynamic'
export const revalidate = 1

const Text = () => {

  const res = use(getNews())

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: res.EventText }} />
    </>
  );
}

export default Text;

