import Link from "next/link";

const Level2 = ({ path, text }: {
    path: string,
    text: string

}) => {


    return (

        <Link href={path}>
            <p className="text-light text-center indent-0 cursor-pointer">{text}</p>
        </Link>

    );
};



export default Level2;

