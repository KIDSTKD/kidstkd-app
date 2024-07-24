import Heading from "@/components/ui/heading";

import KibonGroupList from "@/components/kibon-components/kibon-group-list";

import { Metadata } from "next";
const headerTitle = "Прыжки";
export const metadata: Metadata = {
   title: headerTitle,
   description: headerTitle + " - KIDSTKD",
};

export default function Ttwigi() {
   return (
      <>
         <Heading text={headerTitle} />

         <KibonGroupList kisul_group="idong-gisul" kisul="ttwigi" />
      </>
   );
}
