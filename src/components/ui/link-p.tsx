"use client";

import Image from "next/image";
import IconLink from "../../../public/icons/buttons/link.svg";

const LinkP = ({ text }: { text: string }) => {
   const AnimateLinkLogo = () => {
      document.getElementById("link-icon")!.classList.toggle("rotate-180");
   };

   return (
      <>
         <span
            onMouseOver={AnimateLinkLogo}
            onMouseLeave={AnimateLinkLogo}
            className="hover:bg-subblue/25 rounded text-linkblue inline-flex items-baseline indent-0 cursor-pointer"
         >
            {text}
            <Image id="link-icon" src={IconLink} alt="Ссылка" className="w-4 transition-transform" />
         </span>
      </>
   );
};

export default LinkP;
