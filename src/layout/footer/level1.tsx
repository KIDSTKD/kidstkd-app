import Link from "next/link";

const Level1 = ({ menu, text }: {
    menu: string,
    text: string

}) => {


    return (
        <Link href={`/${menu}`}>
            <h2 className="text-light text-2xl cursor-pointer">{text}</h2>
        </Link>
    );
};



export default Level1;

