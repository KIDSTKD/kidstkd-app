import Image from "next/image";
import Link from "next/link";


const BlogImage = ({ src, alt, href }: { src: string; alt: string; href: string }) => {
   return (
      <div className="flex flex-col float-right">
      <Link href={href}>
         <Image src={src} alt={alt} width={360} height={360} className="w-full lg:w-80 float-right lg:p-2 rounded object-cover" />
      </Link>

      </div>
   );
};

export default BlogImage;
