import Link from "next/link";
import { use } from "react";

import { ITags } from "@/interfaces/tags";

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

export async function getPost() {
   pbClient.autoCancellation(false);
   const results = await pbClient.collection("05_posts_tags").getFullList<ITags>();
   return results;
}

const TagsCloud = () => {
   const res = use(getPost());

   return (
      <div className="pt-10">
         {res.map((posts: ITags) => (
            <Link key={posts.id} href={"/05-taekwondo/blog/" + posts.tag}>
               <h2 className="text-gray/50 cursor-pointer hover:text-linkblue/50">#{posts.description}</h2>
            </Link>
         ))}
      </div>
   );
};

export default TagsCloud;
