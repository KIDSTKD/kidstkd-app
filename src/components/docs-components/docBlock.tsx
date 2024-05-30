import Image from "next/image";
import Link from "next/link";

const DocBlock = ({ img, header, description, link }: { img: string, header: string, description: string, link: string }) => {
    return (
        <Link href={link}>
            <div className="flex h-20 lg:ml-2 mb-2 rounded-sm pt-[3px]
                            hover:bg-light hover:bg-opacity-50
                            transition-all duration-300'>
            ">
                <div className="h-20 w-20">
                    <Image className="p-1" src={img} alt='Документ' width={300} height={300} />
                </div>
                <div className="w-full">
                    <p className="leading-4 indent-0">{header}</p>
                    <div className="flex justify-between">
                        <p className="mt-[-10px]">{description}</p>
                        {/* <p className="italic text-lightgray">Скачали: 55 раз</p> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DocBlock;

