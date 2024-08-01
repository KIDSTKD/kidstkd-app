"use client";

import Link from "next/link";
import Image from "next/image";
import IconLink from "../../../public/icons/buttons/link.svg";

const LinkSpan = ({ text, href }: { text: string; href: string }) => {
   return (
      <>
         <Link href={href}>
            <span className="hover:bg-subblue/25 rounded text-linkblue inline-flex items-baseline indent-0 cursor-pointer">
               {text}
               <Image id="link-icon" src={IconLink} alt="Ссылка" className="w-4" />
            </span>
         </Link>
      </>
   );
};

export default LinkSpan;
