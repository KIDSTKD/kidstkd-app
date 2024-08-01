import Image from "next/image"

export default function Poster() {

    const wtc = [
        { year: 1973, date: "25-27 мая", place: "Сеул, Корея", src: "/img/blog/competition/wtc/1973.jpg" },
        { year: 1975, date: "28-31 августа", place: "Сеул, Корея", src: "/img/blog/competition/wtc/1975.jpg" },
        { year: 1977, date: "15-17 сентября", place: "Чикаго, США", src: "/img/blog/competition/wtc/1977.jpg" },
        { year: 1979, date: "26-28 октября", place: "Штудгард, Германия", src: "/img/blog/competition/wtc/1979.jpg" },
        { year: 1982, date: "26-28 октября", place: "Гуаякиль, Эквадор", src: "/img/blog/competition/wtc/1982.jpg" },
        { year: 1983, date: "20-23 октября", place: "Копенгаген, Дания", src: "/img/blog/competition/wtc/1983.jpg" },
        { year: 1985, date: "20-23 сентября", place: "Сеул, Корея", src: "/img/blog/competition/wtc/1985.jpg" },
        { year: 1987, date: "7-11 октября", place: "Барселона, Испания", src: "/img/blog/competition/wtc/1987.jpg" },
        { year: 1989, date: "9-14 октября", place: "Сеул, Корея", src: "/img/blog/competition/wtc/1989.jpg" },
        { year: 1991, date: "23 октября - 3 ноября", place: "Афины, Греция", src: "/img/blog/competition/wtc/1991.jpg" },
        { year: 1993, date: "19-21 августа", place: "Нью-Йорк, США", src: "/img/blog/competition/wtc/1993.jpg" },
        { year: 1995, date: "17-21 ноября", place: "Манила, Филиппины", src: "/img/blog/competition/wtc/1995.jpg" },
        { year: 1997, date: "19-23 ноября", place: "Гонг-конг, Китай", src: "/img/blog/competition/wtc/1997.jpg" },
        { year: 1999, date: "2-6 июня", place: "Эдмонтон, Канада", src: "/img/blog/competition/wtc/1999.jpg" },
        { year: 2001, date: "1-7 ноября", place: "Чечжу, Корея", src: "/img/blog/competition/wtc/2001.jpg" },
        { year: 2003, date: "24-28 сентября", place: "Гармиш-Партенкирхен, Германия", src: "/img/blog/competition/wtc/2003.jpg" },
        { year: 2005, date: "13-17 апреля", place: "Мадрид, Испания", src: "/img/blog/competition/wtc/2005.jpg" },
        { year: 2007, date: "18-22 мая", place: "Пекин, Китай", src: "/img/blog/competition/wtc/2007.jpg" },
        { year: 2009, date: "14-18 октября", place: "Копенгаген, Дания", src: "/img/blog/competition/wtc/2009.jpg" },
        { year: 2011, date: "1-6 мая", place: "Кёнчжу, Корея", src: "/img/blog/competition/wtc/2011.jpg" },
        { year: 2013, date: "15-21 июля", place: "Пуэбла, Мексика", src: "/img/blog/competition/wtc/2013.jpg" },
        { year: 2015, date: "12-18 мая", place: "Челябинск, Россия", src: "/img/blog/competition/wtc/2015.jpg" },
        { year: 2017, date: "24-30 июня", place: "Мучжу, Корея", src: "/img/blog/competition/wtc/2017.jpg" },
        { year: 2019, date: "15-19 мая", place: "Манчестер, Великобритания", src: "/img/blog/competition/wtc/2019.jpg" },
        { year: 2022, date: "13-20 ноября", place: "Гвадалахара, Мексика", src: "/img/blog/competition/wtc/2022.jpg" },
        { year: 2023, date: "29 мая - 4 июня", place: "Баку, Азербайджан", src: "/img/blog/competition/wtc/2023.jpg" },

    ]

    return (

        <>
            <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-2">
                {wtc.map((data) => (
                    <div key={data.year} className="hover:bg-subblue hover:brightness-75 transition-all">
                        <Image src={data.src} alt={"Чемпионат Мира" + data.year + ", " + data.place} width={300} height={300} />
                        <h4 className='p-0 border-b-2 border-blue text-left indent-2'>{data.year}</h4>
                        <div className='font-exo2 text-lg text-left'>{data.date}</div>
                        <div className='font-exo2 text-left font-semibold'>{data.place}</div>
                    </div>
                ))}
            </div>

        </>
    )
}