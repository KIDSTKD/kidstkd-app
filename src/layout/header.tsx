
const Header = () => {

    return (
        <header className="grid-in-header 
                           hidden lg:flex 
                           flex-row justify-between
                           items-center
                           px-2
                           ">
            <div className="flex flex-row">
                <h2 className="text-2xl pl-6">Турниры</h2>
                <h2 className="text-2xl pl-6">Рейтинг</h2>
            </div>
            <div className="flex flex-row gap-8 pr-2">
                <div className="flex flex-row gap-4">
                    <div className="bg-blue rounded-full p-1">
                        <div id='user' className='p-4 bg-iconUser transition bg-no-repeat bg-center'></div>
                    </div>
                    <div className="bg-blue rounded-full p-1">
                        <div id='user' className='p-4 bg-iconUser transition bg-no-repeat bg-center'></div>
                    </div>
                    <div className="bg-blue rounded-full p-1">
                        <div id='user' className='p-4 bg-iconUser transition bg-no-repeat bg-center'></div>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="bg-blue rounded-full p-1">
                        <div id='user' className='p-4 bg-iconUser transition bg-no-repeat bg-center'></div>
                    </div>
                </div>
            </div>


        </header>



    );
};

export default Header;