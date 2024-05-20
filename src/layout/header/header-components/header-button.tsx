import Link from "next/link";

const HeaderButton = ({ text }: { text: string }) => {


    return (

        <div className="bg-blue rounded-full w-10 h-10 p-1 flex items-center justify-around">
            <Link id={text} className={`p-4 transition bg-no-repeat bg-center 
            ${text == "search" ? "bg-iconSearch hover:bg-iconSearchActive" :
                    text == "mail" ? "bg-iconMail hover:bg-iconMailActive" :
                        text == "user" ? "bg-iconUser hover:bg-iconUserActive" :
                            text == "more" ? "bg-iconMore hover:rotate-180 transition-transform" : ""
                }`} href='/'></Link>
        </div>

    );
};

export default HeaderButton;