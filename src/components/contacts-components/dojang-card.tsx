import Button from "../../ui/button";

const DojangCard = ({ city, place, adress, src }: { city: string, place: string, adress: string, src: string }) => {
    return (
        <>
            <div className="lg:relative lg:h-[400px] lg:mb-2">
                <div className="w-full lg:w-[430px]">
                    <div className="flex flex-row">
                        <div className="bg-dojang w-32 h-32 ml-2 mt-2 bg-no-repeat bg-center drop-shadow-xl"></div>
                        <div className="pt-4 w-full">
                            <h2>{city}</h2>
                            <h2>{place}</h2>
                        </div>
                    </div>
                    <div>
                        <p>{adress}</p>
                        <p>Тренер: Салатский С.В.</p>
                    </div>
                    <div className="hidden lg:flex justify-center pt-8">
                        <Button text="Записаться на занятие" />
                    </div>
                </div>
                <iframe className="lg:absolute lg:top-0 lg:right-0 lg:w-[calc(100%-430px)] lg:h-[400px]
                w-full h-[calc(75vw)]
                " src={src}></iframe>
                <div className="flex lg:hidden justify-end mt-[-80px]">
                    <a href='http://wa.me/79644432986'>
                        <Button text="Записаться на занятие" />

                    </a>
                </div>
            </div >
        </>
    );
}

export default DojangCard;