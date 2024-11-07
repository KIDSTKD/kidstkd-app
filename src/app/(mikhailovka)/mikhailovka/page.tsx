import Link from "next/link";

import Heading from "@/components/ui/heading";
import LinkSpan from "@/components/ui/link-span";

import Massage from "@/components/home/massage-me";
import TKDBanner from "@/components/home/tkd-banner";
import BestAthlete from "@/components/home/best-athlet";

import PaginatedNews from "@/components/news-components/paginated-news";
import PaginatedPosts from "@/components/posts-components/paginated-posts";

import { Metadata } from "next";
const headerTitle = "Тхэквондо в Михайловке";
export const metadata: Metadata = {

   alternates: {
      canonical: "https://kidstkd.ru",
   },
};

export const revalidate = 3600


export default function Home() {
   return (
      <>
         <Heading text={headerTitle} />
        <p>
            Мы приглашаем детей от 4 лет на занятия олимпийским видом спорта. Занятия проходят в группах детей одного возраста, что обеспечивает
            положительный результат занятий. Занятия охватывают все аспекты тхэквондо, и включают в себя базовую подготовку, обучение ударной технике,
            обучение техническому комплексу пхумсэ.
         </p>

         <h4 className="bg-subblue">Расписание занятий</h4>

         <div className="grid grid-cols-3 gap-4 bg-subblue p-4 indent-o">
         <div className="bg-blue rounded "><p className="text-center text-light indent-0">Вторник</p></div>
         <div className="bg-blue rounded "><p className="text-center text-light indent-0">Четверг</p></div>
         <div className="bg-blue rounded "><p className="text-center text-light indent-0">Суббота</p></div>
         <div className="bg-blue rounded "><p className="text-center text-light indent-0">10:30-12:00</p></div>
         <div className="bg-blue rounded "><p className="text-center text-light indent-0">10:30-12:00</p></div>
         <div className="bg-blue rounded"><p className="text-center text-light indent-0">10:30-12:00</p></div>
         <div className="bg-blue rounded"><p className="text-center text-light indent-0">15:30-17:00</p></div>
         <div className="bg-blue rounded"><p className="text-center text-light indent-0">15:30-17:00</p></div>
         <div className="bg-blue rounded"><p className="text-center text-light indent-0">10:30-12:00</p></div>
         <div className="bg-blue rounded "><p className="text-center text-light indent-0">17:00-18:00</p></div>
         <div className="bg-blue rounded"><p className="text-center text-light indent-0">17:00-18:00</p></div>
         <div className="bg-blue rounded"><p className="text-center text-light indent-0">12:00-13:00</p></div>
    

</div>
         <h4>Для занятий Вашему ребенку понадобиться:</h4>
         <ul>
            <li>
               - справка от врача о том, что по состоянию здоровья ребенок может заниматься в секции спортивных единоборств, в данном случае -
               тхэквондо;
            </li>
            <li>
               - заявление и согласие на обработку персональных данных
            </li>
            <li>- копии свидетельства о рождении и полиса ОМС (обязательного медицинского страхования);</li>
            <li>- страховой полис от несчастных случаев (с минимальной страховой суммой 10,000 рублей).</li>
         </ul>
         <p>
            Мы находимся по адресу с.Михайловка, ул. Ленинская, 38 (ДЮСШ с.Михайловка). Занятия проводит Салатский Станислав
            Вадимович (Мастер Спорта РФ, 2ой дан, педагог первой категории) -{" "}
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
