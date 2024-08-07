import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";

import LinkSpan from "@/components/ui/link-span";

import { OG2024DrawShits } from "./drawshits";

import { Metadata } from "next";
const headerTitle = "Тхэквондо - ОИ2024";
export const metadata: Metadata = {
   title: headerTitle,
   description: "Тхэквондо на летних Олимпийских играх 2024",
   openGraph: {
      images: "/img/blog/competition/og/2024/mascot.png",
      title: headerTitle,
      description: "Тхэквондо на летних Олимпийских играх 2024",
      url: "https://kidstkd.ru/competition/og/2024",
   },
   alternates: {
      canonical: "https://kidstkd.ru/competition/og/2024",
   },
};

export default function OG2024() {
   return (
      <>
         <Heading text={headerTitle} />
         <Image
            src="/img/blog/competition/og/2024/mascot.png"
            alt={headerTitle}
            width={360}
            height={240}
            className="w-full lg:w-80 float-right lg:p-2 rounded object-cover"
         />
         <p>
            Соревнования по тхэквондо на летних Олимпийских играх 2024 года в Париже пройдут с 7 по 10 августа на стадионе Гран-пале Стрип. В
            соревнованиях примут участие 128 лучших тхэквондистов: по 16 в каждой из 8 весовых категорий (4 у мужчин и 4 у женщин).
         </p>

         <h2>Расписание и прямые трансляции</h2>
         <h5 className="flex flex-raw items-center gap-3">
            <LinkSpan text="7 АВГУСТА - женщины -47кг, мужчины -58кг" href='2024/live/day1' />
            <Link href='2024/live/day1'>
            <div className="bg-iconStream w-6 h-6 animate-pulse"></div>
            </Link>
         </h5>
         <h5 className="flex flex-raw items-center gap-3">
            <LinkSpan text="8 АВГУСТА - женщины -57кг, мужчины -68кг" href='2024/live/day2' />
            <Link href='2024/live/day2'>
            <div className="bg-iconStream w-6 h-6 animate-pulse"></div>
            </Link>
         </h5>
         <h5 className="flex flex-raw items-center gap-3">
            <LinkSpan text="9 АВГУСТА - женщины -67кг, мужчины -80кг" href='2024/live/day3' />
            <Link href='2024/live/day3'>
            <div className="bg-iconStream w-6 h-6 animate-pulse"></div>
            </Link>
         </h5>
         <h5 className="flex flex-raw items-center gap-3">
            <LinkSpan text="10 АВГУСТА - женщины +67кг, мужчины +80кг" href='2024/live/day4' />
            <Link href='2024/live/day4'>
            <div className="bg-iconStream w-6 h-6 animate-pulse"></div>
            </Link>
         </h5>



         <h2>Турнирные таблицы (сетки)</h2>
         <div className="grid grid-cols-2 lg:grid-cols-4">
            {OG2024DrawShits.map(({ id, title, path }) => (
               <Link className="relative" href={path} key={id}>
                  <div className="absolute top-0 bottom-0 left-0 right-0 z-20 items-center flex">
                  <h4 className="text-6xl text-dark/50 text-center w-full cursor-pointer hover:bg-lightblue/25">{title}</h4>
                  </div>
               <Image key={id} src={path} alt={title} width={360} height={240} className="object-cover cursor-pointer" />
               </Link>
            ))}
         </div>
         <h2>Квалификация</h2>
         <p>
            Всего 128 спортсменов примут участие в олимпийском турнире по тхэквондо в столице Франции: 64 мужчины и 64 женщины — ровно столько же,
            сколько и на предыдущих Играх. В это количество входят квоты страны-хозяйки (два тхэквондиста каждого пола) и квоты, распределенные по
            принципу универсальности (также по два представителя каждого пола).
         </p>
         <p>
            Оставшиеся 120 квот будут распределены между национальными олимпийскими комитетами (НОК). Максимальное количество — восемь квот для одного
            НОКа (одна квота в каждой весовой категории, четыре квоты для каждого пола).
         </p>
         <p>
            В каждой из восьми весовых категорий будет соревноваться максимум 16 тхэквондистов. Однако это количество может быть увеличено, если на
            Игры дополнительно отберутся спортсмены из олимпийской команды беженцев.
         </p>
         <p>
            Топ-5 атлетов в каждой из весовых категорий в Олимпийском рейтинге WT получат по одной квоте для своих НОКов. Олимпийский рейтинг WT будет
            учитывать результаты соревнований, которые пройдут до финала Гран-при в декабре 2023 года.
         </p>
         <p>
            Спортсмены с наивысшим результатом в каждой весовой категории в турнире мировой серии Grand Slam («Большой шлем») по тхэквондо по
            состоянию на декабрь 2023 года получат по одной квоте на НОК.
         </p>
         <p>
            Спортсмены, занявшие два первых места в каждой весовой категории на каждом из континентальных квалификационных турниров получает по одной
            квоте для своего НОКа. Исключение составит квалификационный турнир в Океании — квоты получат только победители в каждой из весовых
            категорий.
         </p>
         <h2>Участники</h2>
         <div className="grid grid-cols-2 gap-10">
            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">W-49kg</div>
               <p className="flex justify-between">
                  JOSIPA KAFADAR<span>CAN</span>
               </p>
               <p className="flex justify-between">
                  QING GUO<span>CHN</span>
               </p>
               <p className="flex justify-between">
                  LENA STOJKOVIC<span>CRO</span>
               </p>
               <p className="flex justify-between">
                  DINA POURYOUNES LANGEROUDI<span>EOR</span>
               </p>
               <p className="flex justify-between">
                  ADRIANA CEREZO IGLESIAS<span>ESP</span>
               </p>
               <p className="flex justify-between">
                  MOBINA NEMATZADEH<span>IRI</span>
               </p>
               <p className="flex justify-between">
                  ABISHAG SEMBERG<span>ISR</span>
               </p>
               <p className="flex justify-between">
                  ILENIA ELISABETTA MATONTI<span>ITA</span>
               </p>
               <p className="flex justify-between">
                  DUNYA ALI M ABUTALEB<span>KSA</span>
               </p>
               <p className="flex justify-between">
                  MICHELLE TAU<span>LES</span>
               </p>
               <p className="flex justify-between">
                  OUMAIMA EL BOUCHTI<span>MAR</span>
               </p>
               <p className="flex justify-between">
                  DANIELA PAOLA SOUZA<span>MEX</span>
               </p>
               <p className="flex justify-between">
                  PANIPAK WONGPATTANAKIT<span>THA</span>
               </p>
               <p className="flex justify-between">
                  ANA DA COSTA DA SILVA PINTO<span>TLS</span>
               </p>
               <p className="flex justify-between">
                  IKRAM DHAHRI<span>TUN</span>
               </p>
               <p className="flex justify-between">
                  MERVE DINCEL KAVURAT<span>TUR</span>
               </p>
               <p className="flex justify-between">
                  MARIA SARA GRIPPOLI GAGLIARDO<span>URU</span>
               </p>
            </div>

            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">W-57kg</div>
               <p className="flex justify-between">
                  STACEY HYMER<span>AUS</span>
               </p>
               <p className="flex justify-between">
                  MARIA CLARA PACHECO<span>BRA</span>
               </p>
               <p className="flex justify-between">
                  KIMIA ALIZADEH ZENOZI<span>BUL</span>
               </p>
               <p className="flex justify-between">
                  SKYLAR PARK<span>CAN</span>
               </p>
               <p className="flex justify-between">
                  ZONGSHI LUO<span>CHN</span>
               </p>
               <p className="flex justify-between">
                  DOMINIKA HRONOVA<span>CZE</span>
               </p>
               <p className="flex justify-between">
                  EMMANUELLA ATORA<span>GAB</span>
               </p>
               <p className="flex justify-between">
                  JADE JONES<span>GBR</span>
               </p>
               <p className="flex justify-between">
                  NAHID KIYANICHANDEH<span>IRI</span>
               </p>
               <p className="flex justify-between">
                  YUJIN KIM<span>KOR</span>
               </p>
               <p className="flex justify-between">
                  LAETITIA AOUN<span>LBN</span>
               </p>
               <p className="flex justify-between">
                  MILJANA RELJIKJ<span>MKD</span>
               </p>
               <p className="flex justify-between">
                  CHIA-LING LO<span>TPE</span>
               </p>
               <p className="flex justify-between">
                  CHAIMA TOUMI<span>TUN</span>
               </p>
               <p className="flex justify-between">
                  HATICE KUBRA ILGUN<span>TUR</span>
               </p>
               <p className="flex justify-between">
                  FAITH DILLON<span>USA</span>
               </p>
            </div>

            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">W-67kg</div>

               <p className="flex justify-between">
                  SARAH CHAARI<span>BEL</span>
               </p>
               <p className="flex justify-between">
                  CAROLINE SANTOS<span>BRA</span>
               </p>
               <p className="flex justify-between">
                  JIE SONG<span>CHN</span>
               </p>
               <p className="flex justify-between">
                  RUTH GBAGBI<span>CIV</span>
               </p>
               <p className="flex justify-between">
                  MADELYN ANDREA RODRIGUEZ<span>DOM</span>
               </p>
               <p className="flex justify-between">
                  AYA SHEHATA<span>EGY</span>
               </p>
               <p className="flex justify-between">
                  CECILIA CASTRO BURGOS<span>ESP</span>
               </p>
               <p className="flex justify-between">
                  LOLOHEA NAVUGA NAITASI<span>FIJ</span>
               </p>
               <p className="flex justify-between">
                  MAGDA WIET-HENIN<span>FRA</span>
               </p>
               <p className="flex justify-between">
                  VIVIANA MARTON<span>HUN</span>
               </p>
               <p className="flex justify-between">
                  JULYANA ALSADEQ<span>JOR</span>
               </p>
               <p className="flex justify-between">
                  ELIZABETH OLUCHI ANYANACHO<span>NGR</span>
               </p>
               <p className="flex justify-between">
                  ALEKSANDRA PERISIC<span>SRB</span>
               </p>
               <p className="flex justify-between">
                  SASIKARN TONGCHAN<span>THA</span>
               </p>
               <p className="flex justify-between">
                  KRISTINA TEACHOUT<span>USA</span>
               </p>
               <p className="flex justify-between">
                  OZODA SOBIRJONOVA<span>UZB</span>
               </p>
            </div>

            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">W+67kg</div>

               <p className="flex justify-between">
                  MARLENE JAHL<span>AUT</span>
               </p>
               <p className="flex justify-between">
                  FERNANDA AGUIRRE<span>CHI</span>
               </p>
               <p className="flex justify-between">
                  ZEQI ZHOU<span>CHN</span>
               </p>
               <p className="flex justify-between">
                  ASTAN KATHERINE FEGHE BATHILY<span>CIV</span>
               </p>
               <p className="flex justify-between">
                  ARLETTYS ACOSTA HERRERA<span>CUB</span>
               </p>
               <p className="flex justify-between">
                  PETRA STOLBOVA<span>CZE</span>
               </p>
               <p className="flex justify-between">
                  VENICE ELIZABETH MEGAN TRAILL<span>FIJ</span>
               </p>
               <p className="flex justify-between">
                  ALTHEA LAURIN<span>FRA</span>
               </p>
               <p className="flex justify-between">
                  REBECCA MCGOWAN<span>GBR</span>
               </p>
               <p className="flex justify-between">
                  LORENA BRANDL<span>GER</span>
               </p>
               <p className="flex justify-between">
                  RAMA ABO-ALRUB<span>JOR</span>
               </p>
               <p className="flex justify-between">
                  DABIN LEE<span>KOR</span>
               </p>
               <p className="flex justify-between">
                  FATIMA-EZZAHRA ABOUFARAS<span>MAR</span>
               </p>
               <p className="flex justify-between">
                  MUNIRA ABDUSALOMOVA<span>TJK</span>
               </p>
               <p className="flex justify-between">
                  NAFIA KUS AYDIN<span>TUR</span>
               </p>
               <p className="flex justify-between">
                  SVETLANA OSIPOVA<span>UZB</span>
               </p>
            </div>

            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">M-58kg</div>

               <p className="flex justify-between">
                  GEORGII GURTSIEV<span>AIN</span>
               </p>
               <p className="flex justify-between">
                  LUCAS GUZMAN<span>ARG</span>
               </p>
               <p className="flex justify-between">
                  BAILEY LEWIS<span>AUS</span>
               </p>
               <p className="flex justify-between">
                  GASHIM MAGOMEDOV<span>AZE</span>
               </p>
               <p className="flex justify-between">
                  HADI TIRANVALIPOUR<span>EOR</span>
               </p>
               <p className="flex justify-between">
                  ADRIAN VICENTE YUNTA<span>ESP</span>
               </p>
               <p className="flex justify-between">
                  CYRIAN RAVET<span>FRA</span>
               </p>
               <p className="flex justify-between">
                  OMAR GERGELY SALIM<span>HUN</span>
               </p>
               <p className="flex justify-between">
                  JACK WOOLLEY<span>IRL</span>
               </p>
               <p className="flex justify-between">
                  VITO DELL AQUILA<span>ITA</span>
               </p>
               <p className="flex justify-between">
                  SAMIRKHON ABABAKIROV<span>KAZ</span>
               </p>
               <p className="flex justify-between">
                  TAEJOON PARK<span>KOR</span>
               </p>
               <p className="flex justify-between">
                  NOURIDINE ISSAKA GARBA<span>NIG</span>
               </p>
               <p className="flex justify-between">
                  OMAR YASER ISMAIL<span>PLE</span>
               </p>
               <p className="flex justify-between">
                  BOCAR DIOP<span>SEN</span>
               </p>
               <p className="flex justify-between">
                  LEV KORNEEV<span>SRB</span>
               </p>
               <p className="flex justify-between">
                  MOHAMED KHALIL JENDOUBI<span>TUN</span>
               </p>
               <p className="flex justify-between">
                  YOHANDRI GRANADO<span>VEN</span>
               </p>
               <p className="flex justify-between">
                  <span></span>
               </p>
               <p className="flex justify-between">
                  <span></span>
               </p>
               <p className="flex justify-between">
                  <span></span>
               </p>
            </div>

            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">M-68kg</div>
               <p className="flex justify-between">
                  EDIVAL PONTES<span>BRA</span>
               </p>
               <p className="flex justify-between">
                  IBRAHIM MAIGA<span>BUR</span>
               </p>
               <p className="flex justify-between">
                  YUSHUAI LIANG<span>CHN</span>
               </p>
               <p className="flex justify-between">
                  MARKO GOLUBIC<span>CRO</span>
               </p>
               <p className="flex justify-between">
                  BERNARDO PIE<span>DOM</span>
               </p>
               <p className="flex justify-between">
                  AHMED NASSAR<span>EGY</span>
               </p>
               <p className="flex justify-between">
                  YAHYA AL GHOTANY<span>EOR</span>
               </p>
               <p className="flex justify-between">
                  JAVIER PEREZ POLO<span>ESP</span>
               </p>
               <p className="flex justify-between">
                  SOULEYMAN ALAPHILIPPE<span>FRA</span>
               </p>
               <p className="flex justify-between">
                  BRADLY SINDEN<span>GBR</span>
               </p>
               <p className="flex justify-between">
                  WAI FUNG LO<span>HKG</span>
               </p>
               <p className="flex justify-between">
                  LEVENTE MARK JOZSA<span>HUN</span>
               </p>
               <p className="flex justify-between">
                  ZAID KAREEM<span>JOR</span>
               </p>
               <p className="flex justify-between">
                  KEVIN SOGO KASSMAN<span>PNG</span>
               </p>
               <p className="flex justify-between">
                  BANLUNG TUBTIMDANG<span>THA</span>
               </p>
               <p className="flex justify-between">
                  HAKAN RECBER<span>TUR</span>
               </p>
               <p className="flex justify-between">
                  ULUGBEK RASHITOV<span>UZB</span>
               </p>
            </div>

            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">M-80kg</div>
               <p className="flex justify-between">
                  LEON SEJRANOVIC<span>AUS</span>
               </p>
               <p className="flex justify-between">
                  HENRIQUE MARQUES RODRIGUES FERNANDES<span>BRA</span>
               </p>
               <p className="flex justify-between">
                  FAYSAL SAWADOGO<span>BUR</span>
               </p>
               <p className="flex justify-between">
                  JOAQUIN CHURCHILL MARTINEZ<span>CHI</span>
               </p>
               <p className="flex justify-between">
                  EDI HRNIC<span>DEN</span>
               </p>
               <p className="flex justify-between">
                  SEIF EISSA<span>EGY</span>
               </p>
               <p className="flex justify-between">
                  FARZAD MANSOURI<span>EOR</span>
               </p>
               <p className="flex justify-between">
                  MEHRAN BARKHORDARI<span>IRI</span>
               </p>
               <p className="flex justify-between">
                  SIMONE ALESSIO<span>ITA</span>
               </p>
               <p className="flex justify-between">
                  SALEH ELSHARABATY<span>JOR</span>
               </p>
               <p className="flex justify-between">
                  BATYRKHAN TOLEUGALI<span>KAZ</span>
               </p>
               <p className="flex justify-between">
                  GEONWOO SEO<span>KOR</span>
               </p>
               <p className="flex justify-between">
                  ISMAEL COULIBALY<span>MLI</span>
               </p>
               <p className="flex justify-between">
                  STEFAN TAKOV<span>SRB</span>
               </p>
               <p className="flex justify-between">
                  FIRAS KATOUSSI<span>TUN</span>
               </p>
               <p className="flex justify-between">
                  CJ NICKOLAS<span>USA</span>
               </p>
               <p className="flex justify-between">
                  JASURBEK JAYSUNOV<span>UZB</span>
               </p>
            </div>

            <div className="">
               <div className="text-4xl font-bebasRegular text-dark hover:bg-lightblue/25 cursor-pointer">M+80kg</div>

               <p className="flex justify-between">
                  ZHAOXIANG SONG<span>CHN</span>
               </p>
               <p className="flex justify-between">
                  CHEICK SALLAH CISSE<span>CIV</span>
               </p>
               <p className="flex justify-between">
                  IVAN SAPINA<span></span>CRO
               </p>
               <p className="flex justify-between">
                  RAFAEL ALBA<span>CUB</span>
               </p>
               <p className="flex justify-between">
                  KASRA MEHDIPOURNEJAD<span>EOR</span>
               </p>
               <p className="flex justify-between">
                  ALASAN ANN<span>GAM</span>
               </p>
               <p className="flex justify-between">
                  CADEN CUNNINGHAM<span>GBR</span>
               </p>
               <p className="flex justify-between">
                  PAIVOU JOHNOUARIO GOMIS<span>GBS</span>
               </p>
               <p className="flex justify-between">
                  ARIAN SALIMI<span>IRI</span>
               </p>
               <p className="flex justify-between">
                  CARLOS SANSORES<span>MEX</span>
               </p>
               <p className="flex justify-between">
                  ABDOUL ISSOUFOU<span>NIG</span>
               </p>
               <p className="flex justify-between">
                  RICHARD ANDRE ORDEMANN<span>NOR</span>
               </p>
               <p className="flex justify-between">
                  GIBSON KAOGO MARA<span>PNG</span>
               </p>
               <p className="flex justify-between">
                  PATRIK DIVKOVIC<span>SLO</span>
               </p>
               <p className="flex justify-between">
                  EMRE KUTALMIS ATESLI<span>TUR</span>
               </p>
               <p className="flex justify-between">
                  JONATHAN HEALY<span>USA</span>
               </p>
               <p className="flex justify-between">
                  NIKITA RAFALOVICH<span>UZB</span>
               </p>
            </div>
         </div>
      </>
   );
}
