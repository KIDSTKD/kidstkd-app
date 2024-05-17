import Link from "next/link";

const HeaderMailButton = () => {


    return (

        <div className="bg-blue rounded-full w-12 h-12 p-1 flex items-center justify-around">
            <Link id='mail' className=' p-4 transition bg-no-repeat bg-center bg-iconMail hover:bg-iconMailActive' href='/'></Link>
        </div>

    );
};

export default HeaderMailButton;