import Heading from "@/components/ui/heading";
import KibonGroupList from "@/components/kibon-components/kibon-group-list";

import { Metadata } from "next";
const headerTitle = "Освобождение от захватов";
export const metadata: Metadata = {
   title: headerTitle,
   description: headerTitle + " - KIDSTKD",
};

export const dynamic = "force-dynamic";
export const revalidate = 1;

export default function Ppaegi() {
   return (
      <>
         <Heading text={headerTitle} />

         <KibonGroupList />
      </>
   );
}
