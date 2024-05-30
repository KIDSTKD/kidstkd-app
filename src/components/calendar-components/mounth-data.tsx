
const MounthData = ({ date, title, etc }: { date: string, title: string, etc: string }) => {
  return (
    <>
      <div className='py-2 leading-3 border-blue ml-2 lg:ml-12
      hover:border-l-8
      hover:transition
      hover:ml-0 lg:hover:ml-10
      transition-all duration-300'>
        <p><span className='font-bold'>{date}</span> {title}</p>
        <p className='italic font text-lightgray'>{etc}</p>
      </div>
    </>
  )
}

export default MounthData;

