import { IKibon } from '@/interfaces/kibon';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");


export async function getKibon(params: {id: string}) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('kibon').getOne<IKibon>(`${params.id}`, {
  });
  return results;
};