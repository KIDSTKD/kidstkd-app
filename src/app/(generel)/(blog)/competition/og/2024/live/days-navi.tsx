import Link from "next/link";

const DaysNavi = () => {
    return (
        <>
      <div className="flex flex-row justify-center gap-10">
         <div className="bg-blue rounded hover:bg-subblue"><Link href='day1'><h4 className="text-light">7 августа</h4></Link></div>
         <div className="bg-blue rounded hover:bg-subblue"><Link href='day2'><h4 className="text-light">8 августа</h4></Link></div>
         <div className="bg-blue rounded hover:bg-subblue"><Link href='day3'><h4 className="text-light">9 августа</h4></Link></div>
         <div className="bg-blue rounded hover:bg-subblue"><Link href='day4'><h4 className="text-light">10 августа</h4></Link></div>
         </div>
        </>
    )
}

export default DaysNavi;

