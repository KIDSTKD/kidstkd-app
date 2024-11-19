import { use } from 'react'

import { ICalendar } from '@/interfaces/calendar';


import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");



export async function getEventsByYear(year: number) {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('04_calendar').getFullList<ICalendar>({
    requestKey: 'events-by-year',
    filter: `Date > "${year}-01-01 00:00:00" && Date < "${year}-12-31 00:00:00"`,
    sort: 'Date',
  });

  return results;

};

export const dynamic = 'force-dynamic'
export const revalidate = 1


const ClandarEventsByYearComponent = ({ year }: { year: number }) => {

  const res = use(getEventsByYear(year))



  return (
    <>
      <div>

        {res.map((events: ICalendar) => (

          <article key={events.id}>

<div
      className={`mb-1 py-2 leading-3 border-blue ml-2 lg:ml-12
      hover:border-l-8
      hover:transition
      hover:ml-0 lg:hover:ml-10
      transition-all duration-300
      flex flex-row
      ${events.rank == "RUS"
        ? "bg-blue"
        : events.rank == "BC"
        ? "bg-subblue"
        : events.rank == "winter-camp"
        ? "bg-winterCamp bg-cover"
        : events.rank == "summer-camp"
        ? "bg-summerCamp bg-cover"
        : ""
        

        
    }`}
      >
        <div className={`w-20 bg-contain bg-no-repeat bg-center ml-2 ${events.rank == "RUS"
        ? ""
        : events.rank == "winter-camp"
        ? "bg-winterCampLogo"
        : events.rank == "summer-camp"
        ? "bg-summerCampLogo"
        : ""
        }`}></div>
        <div>
        <p className={`${events.rank == "RUS"
              ? "font-bebasRegular text-light text-2xl"
              : events.rank == "summer-camp"
              ? 'text-light'
              : ""
        }`}>
          <span className={`${events.rank == "RUS"
              ? "font-bebasLight"
              : "font-bold"
        }`}
          >{events.date_text}</span> {events.name}
        </p>
        <p className={`${events.rank == "RUS"
              ? "text-light"
              : events.rank == "summer-camp"
              ? "text-light"
              : "italic font text-lightgray"
        }`}>{events.description}</p>
        </div>
      </div>

          </article>
        ))}
      </div>

    </>
  );
}

export default ClandarEventsByYearComponent;

