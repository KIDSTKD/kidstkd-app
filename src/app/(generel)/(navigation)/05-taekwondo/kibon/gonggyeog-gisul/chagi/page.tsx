import KibonGroupList from "@/components/kibon-components/kibon-group-list";

import Heading from "@/components/ui/heading";
import { Metadata } from "next";
const headerTitle = "Удары (чхаги)";
export const metadata: Metadata = {
   title: headerTitle,
   description: headerTitle + " - KIDSTKD",
};

export default function Chagi() {
   return (
      <>
         <Heading text={headerTitle} />
<KibonGroupList />

      </>
   );
}
