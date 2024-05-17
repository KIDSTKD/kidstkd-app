import Link from "next/link";

const HeaderSearchButton = () => {


    return (

        <div className="bg-blue rounded-full w-12 h-12 p-1 flex items-center justify-around">
            <Link id='search' className=' p-4 transition bg-no-repeat bg-center bg-iconSearch hover:bg-iconSearchActive' href='/'></Link>
        </div>
    );
};

export default HeaderSearchButton;