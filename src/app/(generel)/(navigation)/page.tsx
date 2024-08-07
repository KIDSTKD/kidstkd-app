import Link from "next/link";

import Heading from "@/components/ui/heading";
import LinkSpan from "@/components/ui/link-span";

import Massage from "@/components/home/massage-me";
import TKDBanner from "@/components/home/tkd-banner";
import BestAthlete from "@/components/home/best-athlet";

import PaginatedNews from "@/components/news-components/paginated-news";
import PaginatedPosts from "@/components/posts-components/paginated-posts";

import { Metadata } from "next";
const headerTitle = "Тхэквондо в Уссурийске";
export const metadata: Metadata = {
   title: headerTitle + " для детей от 4 лет",
   description: "Спортивные секции для детей в Уссурийске. Олимпийское тхэквондо для мальчиков и девочек от 4 лет. Бесплатное пробное занятие",
   alternates: {
      canonical: "https://kidstkd.ru",
   },
};

export const dynamic = "force-dynamic";
export const revalidate = 1;

export default function Home() {
   return (
      <>
         <Heading text={headerTitle} />
         <h4>Прямая трансляция ОИ-2024. День 1</h4>
<iframe className="w-full aspect-video" src="//www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6452535" width="1280" height="720"></iframe>
         <p>
            Мы приглашаем детей от 4 лет на занятия олимпийским видом спорта. Занятия проходят в группах детей одного возраста, что обеспечивает
            положительный результат занятий. Занятия охватывают все аспекты тхэквондо, и включают в себя базовую подготовку, обучение ударной технике,
            обучение техническому комплексу пхумсэ.
         </p>
         <h4>Для занятий Вашему ребенку понадобиться:</h4>
         <ul>
            <li>
               справка от врача о том, что по состоянию здоровья ребенок может заниматься в секции спортивных единоборств, в данном случае -
               тхэквондо;
            </li>
            <li>
               анкета занимающегося в спортивной секции тхэквондо, которую можно <LinkSpan text={"скачать"} href={"/02-docs/07-other"} /> и заполнить
               самостоятельно;
            </li>
            <li>копии свидетельства о рождении и полиса ОМС (обязательного медицинского страхования);</li>
            <li>страховой полис от несчастных случаев (с минимальной страховой суммой 10,000 рублей).</li>
         </ul>
         <p>
            Мы находимся по адресу ул. Ленина 41 (фитнес-клуб «Taekwondo-Land»). Занятия проводят тренеры-инструкторы федерации: Салатский Станислав
            Вадимович (Мастер Спорта РФ, 2ой дан), Ким Виктория Алексеевна (Мастер Спорта РФ, 4ый дан). Дополнительную информацию можно уточнить по
            телефону -{" "}
            <a className="link" href="tel:+79644432986">
               +7(964)443 29 86
            </a>
            .
         </p>
         <Massage />
         <Link href="/05-taekwondo">
            <h4>Что такое тхэквондо?</h4>
         </Link>
         <TKDBanner />
         <p>
            Тхэквондо – традиционное корейское единоборство, один из популярнейших видов спорта, в котором основой является не физическое
            превосходство, а техника. Также тхэквондо позволяет гармонично развивать как физические, так и духовные качества. Сегодня тхэквондо
            международный вид спорта, включенный в программу летних Олимпийских игр.
         </p>
         <p>
            Федерация тхэквондо Уссурийского городского округа занимается развитием Олимпийского вида спорта - тхэквондо на территории г. Уссурийска и
            других территорий округа. Помимо тренировочного процесса наша организация занимается проведением турниров и чемпионатов различного уровня,
            мы регулярно проводим семинары для тренеров, спортсменов и судей. Также спортсмены нашей федерации принимают участие и занимают призовые
            места на различных международных и Всероссийских соревнованиях.
         </p>

         <BestAthlete />

         <h2 className="cursor-pointer mt-5">
            <Link href="/03-news" className="text-gray hover:text-gray">
               Новости
            </Link>
         </h2>
         <PaginatedNews pagenumber={1} perpage={6} withPagination={false} />
         <h2 className="cursor-pointer mt-5">
            <Link href="/05-taekwondo/blog" className="text-gray hover:text-gray">
               Публикации
            </Link>
         </h2>
         <PaginatedPosts pagenumber={1} perpage={6} withPagination={false} />
      </>
   );
}
