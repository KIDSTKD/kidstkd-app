import KibonGroupList from "@/components/kibon-components/kibon-group-list";

import Heading from "@/components/ui/heading";
import { Metadata } from "next";
import Link from "next/link";
const headerTitle = "Удары (чхаги)";
export const metadata: Metadata = {
   title: headerTitle,
   description: headerTitle + " - KIDSTKD",
};

export default function Chagi() {
   return (
      <>
         <Heading text={headerTitle} />
<KibonGroupList kisul_group="gonggyeog-gisul" kisul="chagi"/>

      </>
   );
}
