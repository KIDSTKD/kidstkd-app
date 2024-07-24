const Button = ({ text }: { text: string }) => {
    return (
        <>
            <div>
                <button className="bg-blue text-light 
                                    mx-6 mb-2 p-4 
                                    rounded-2xl 
                                    font-exo 
                                    drop-shadow-lg 
                                    hover:brightness-90 active:brightness-75">{text}</button>
            </div>
        </>

    )
}

export default Button;





