import Heading from "@/ui/heading";
import DocBlock from "@/components/docs-components/docBlock";
import Button from "@/components/ui/button";

import { Metadata } from 'next'
import Link from "next/link";
const headerTitle = 'Документы'
export const metadata: Metadata = {
  title: headerTitle,
  description: headerTitle + ' | KIDSTKD',
}

async function getData01() {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/01-regulations`, { next: { revalidate: 3600 } });
  return res.json();
}

async function getData02() {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/02-rtu`, { next: { revalidate: 3600 } });
  return res.json();
}

async function getData03() {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/03-orders`, { next: { revalidate: 3600 } });
  return res.json();
}

async function getData04() {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/04-competitions`, { next: { revalidate: 3600 } });
  return res.json();
}

async function getData05() {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/05-rules`, { next: { revalidate: 3600 } });
  return res.json();
}

async function getData06() {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/06-pss`, { next: { revalidate: 3600 } });
  return res.json();
}

async function getData07() {
  const res = await fetch(`https://api.npoint.io/d6ff94da0e1884fad4de/07-other`, { next: { revalidate: 3600 } });
  return res.json();
}

export default async function Docs() {

  const table01 = await getData01();
  const regulations = table01.slice(-0, 2)
  const table02 = await getData02();
  const rtu = table02.slice(-0, 2);
  const table03 = await getData03();
  const orders = table03.slice(-0, 2);
  const table04 = await getData04();
  const competitions = table04.slice(-0, 2);
  const table05 = await getData05();
  const rules = table05.slice(-0, 2);
  const table06 = await getData06();
  const pss = table06.slice(-0, 2);
  const table07 = await getData07();
  const other = table07.slice(-0, 2);



  return (
    <>
      <Heading text={headerTitle} />

      <h2>Нормативные документы</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {regulations.map((posts: any) => (
            <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />
          ))}
        </div>
        <Link className="flex items-center justify-center whitespace-nowrap" href='02-docs/01-regulations'><Button text="Посмотреть все" /></Link>
      </div>

      <h2>Документы СТР</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {rtu.map((posts: any) => (
            <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />
          ))}
        </div>
        <Link className="flex items-center justify-center whitespace-nowrap" href='02-docs/02-rtu'><Button text="Посмотреть все" /></Link>
      </div>

      <h2>Приказы о присвоении званий,СР, СК</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {orders.map((posts: any) => (
            <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />
          ))}
        </div>
        <Link className="flex items-center justify-center whitespace-nowrap" href='02-docs/03-orders'><Button text="Посмотреть все" /></Link>
      </div>

      <h2>Положения и протоколы</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {competitions.map((posts: any) => (
            <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />
          ))}
        </div>
        <Link className="flex items-center justify-center whitespace-nowrap" href='02-docs/04-competitions'><Button text="Посмотреть все" /></Link>
      </div>

      <h2>Правила соревнований</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {rules.map((posts: any) => (
            <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />
          ))}
        </div>
        <Link className="flex items-center justify-center whitespace-nowrap" href='02-docs/05-rules'><Button text="Посмотреть все" /></Link>
      </div>

      <h2>Секритариат, E-PSS</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {pss.map((posts: any) => (
            <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />
          ))}
        </div>
        <Link className="flex items-center justify-center whitespace-nowrap" href='02-docs/06-pss'><Button text="Посмотреть все" /></Link>
      </div>

      <h2>Прочее</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {other.map((posts: any) => (
            <DocBlock img={posts.img} header={posts.header} description={posts.description} link={posts.link} key={posts.header} />
          ))}
        </div>
        <Link className="flex items-center justify-center whitespace-nowrap" href='02-docs/07-other'><Button text="Посмотреть все" /></Link>
      </div>


    </>
  )
}


