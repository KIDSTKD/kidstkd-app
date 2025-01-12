"use client";

import { usePathname } from "next/navigation";

import KibonTGLink from "./kibon-tg-link";

import Link from "next/link";

const Jase = () => {
   document.getElementById("jase")!.classList.toggle("hidden");

   document.getElementById("idong-gisul")!.classList.add("hidden");
   document.getElementById("bangeo-gisul")!.classList.add("hidden");
   document.getElementById("gonggyeog-gisul")!.classList.add("hidden");

   document.getElementById("l1-jase")!.classList.add("border-b-4", "border-blue", "pb-[0px]");
   document.getElementById("l1-idong-gisul")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-bangeo-gisul")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-gonggyeog-gisul")!.classList.remove("border-b-4", "border-blue");
};
const IdongGisul = () => {
   document.getElementById("idong-gisul")!.classList.toggle("hidden");

   document.getElementById("jase")!.classList.add("hidden");
   document.getElementById("bangeo-gisul")!.classList.add("hidden");
   document.getElementById("gonggyeog-gisul")!.classList.add("hidden");

   document.getElementById("l1-jase")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-idong-gisul")!.classList.add("border-b-4", "border-blue", "pb-[0px]");
   document.getElementById("l1-bangeo-gisul")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-gonggyeog-gisul")!.classList.remove("border-b-4", "border-blue");
};
const BangeoGisul = () => {
   document.getElementById("bangeo-gisul")!.classList.toggle("hidden");

   document.getElementById("jase")!.classList.add("hidden");
   document.getElementById("idong-gisul")!.classList.add("hidden");
   document.getElementById("gonggyeog-gisul")!.classList.add("hidden");

   document.getElementById("l1-jase")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-idong-gisul")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-bangeo-gisul")!.classList.add("border-b-4", "border-blue", "pb-[0px]");
   document.getElementById("l1-gonggyeog-gisul")!.classList.remove("border-b-4", "border-blue");
};
const GonggyeogGisul = () => {
   document.getElementById("gonggyeog-gisul")!.classList.toggle("hidden");

   document.getElementById("jase")!.classList.add("hidden");
   document.getElementById("idong-gisul")!.classList.add("hidden");
   document.getElementById("bangeo-gisul")!.classList.add("hidden");

   document.getElementById("l1-jase")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-idong-gisul")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-bangeo-gisul")!.classList.remove("border-b-4", "border-blue");
   document.getElementById("l1-gonggyeog-gisul")!.classList.add("border-b-4", "border-blue", "pb-[0px]");
};

const KibonNavigation = () => {
   const pathname = usePathname();

   return (
      <>
      <KibonTGLink />
      <div className="m-1 bg-lightblue rounded-xl">
         
         <Link href="/05-taekwondo/kibon/">
            <h2 className="bg-blue rounded-t-xl text-light cursor-pointer">Базовая техника тхэквондо</h2>
         </Link>
         
         <div id="level1" className="grid grid-cols-4 bg-subblue rounded-b-xl">
            <h4
               id="l1-jase"
               onClick={Jase}
               className={`text-light hover:border-b-4 hover:border-blue rounded-bl-xl pb-1 hover:pb-0 text-xl md:text-2xl cursor-pointer ${
                  pathname.includes("jase") ? "border-b-4 border-blue pb-[0px]" : ""
               } 
                    `}
            >
               Позиции
            </h4>
            <h4
               id="l1-idong-gisul"
               onClick={IdongGisul}
               className={`text-light hover:border-b-4 hover:border-blue pb-0 text-xl md:text-2xl cursor-pointer ${
                  pathname.includes("idong-gisul") ? "border-b-4 border-blue pb-[0px]" : ""
               } 
                    `}
            >
               Перемещение
            </h4>
            <h4
               id="l1-bangeo-gisul"
               onClick={BangeoGisul}
               className={`text-light hover:border-b-4  hover:border-blue pb-0 text-xl md:text-2xl cursor-pointer ${
                  pathname.includes("bangeo-gisul") ? "border-b-4 border-blue pb-[0px]" : ""
               } 
                    `}
            >
               Защита
            </h4>
            <h4
               id="l1-gonggyeog-gisul"
               onClick={GonggyeogGisul}
               className={`text-light hover:border-b-4 hover:border-blue rounded-br-xl pb-0 text-xl md:text-2xl cursor-pointer ${
                  pathname.includes("gonggyeog-gisul") ? "border-b-4 border-blue pb-[0px]" : ""
               } 
                    `}
            >
               Атака
            </h4>
         </div>

         <div id="level2" className="">
            <div
               id="jase"
               className={`bg-lightblue rounded-b-xl ${pathname.includes("jase") ? "" : "hidden"}
                    `}
            >
               <div className="grid grid-cols-3">
                  <Link href="/05-taekwondo/kibon/jase/junbijase">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("junbijase") ? "underline" : "no-underline"
                        }`}
                     >
                        Чунби часэ (позиция готовности)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/jase/jejari-seogi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("jejari-seogi") ? "underline" : "no-underline"
                        }`}
                     >
                        Стойки (чэчари соги)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/jase/etc">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("etc") ? "underline" : "no-underline"
                        }`}
                     >
                        Прочее
                     </p>
                  </Link>
               </div>
            </div>
            <div
               id="idong-gisul"
               className={`bg-lightblue rounded-b-xl ${pathname.includes("idong-gisul") ? "" : "hidden"}
                    `}
            >
               <div className="grid grid-cols-3">
                  <Link href="/05-taekwondo/kibon/idong-gisul/seogi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("seogi") ? "underline" : "no-underline"
                        }`}
                     >
                        Стойки (соги)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/idong-gisul/didgi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("didgi") ? "underline" : "no-underline"
                        }`}
                     >
                        Стэп
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/idong-gisul/ttwigi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("ttwigi") ? "underline" : "no-underline"
                        }`}
                     >
                        Прыжки
                     </p>
                  </Link>
               </div>
            </div>
            <div
               id="bangeo-gisul"
               className={` bg-lightblue rounded-b-xl ${pathname.includes("bangeo-gisul") ? "" : "hidden"}
                    `}
            >
               <div className="grid grid-cols-3">
                  <Link href="/05-taekwondo/kibon/bangeo-gisul/maggi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("maggi") ? "underline" : "no-underline"
                        }`}
                     >
                        Блоки (макки)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/bangeo-gisul/pihagi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("pihagi") ? "underline" : "no-underline"
                        }`}
                     >
                        Уклоны
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/bangeo-gisul/ppaegi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("ppaegi") ? "underline" : "no-underline"
                        }`}
                     >
                        Освобождение от захвата
                     </p>
                  </Link>
               </div>
            </div>
            <div
               id="gonggyeog-gisul"
               className={`bg-lightblue rounded-b-xl ${pathname.includes("gonggyeog-gisul") ? "" : "hidden"}
                    `}
            >
               <div className="grid grid-cols-3">
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/jireugi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("jireugi") ? "underline" : "no-underline"
                        }`}
                     >
                        Удары (чирыги)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/chigi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("chigi") ? "underline" : "no-underline"
                        }`}
                     >
                        Удары (чхиги)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/jjireugi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("jjireugi") ? "underline" : "no-underline"
                        }`}
                     >
                        Удары (ччирыги)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/jabgi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("jabgi") ? "underline" : "no-underline"
                        }`}
                     >
                        Захваты (чапки)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/milgi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("milgi") ? "underline" : "no-underline"
                        }`}
                     >
                        {" "}
                        (мильги)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/kkeokkgi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4  indent-0 cursor-pointer ${
                           pathname.includes("kkeokkgi") ? "underline" : "no-underline"
                        }`}
                     >
                        {" "}
                        (ккокки)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/neomgigi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("neomgigi") ? "underline" : "no-underline"
                        }`}
                     >
                        {" "}
                        (номгиги)
                     </p>
                  </Link>
                  <Link href="/05-taekwondo/kibon/gonggyeog-gisul/chagi">
                     <p
                        className={`text-center text-light hover:bg-subblue/80 rounded-lg hover:underline decoration-1 underline-offset-4 indent-0 cursor-pointer ${
                           pathname.includes("chagi") ? "underline" : "no-underline"
                        }`}
                     >
                        Удары (чхаги)
                     </p>
                  </Link>
               </div>
            </div>
         </div>
      </div>
      </>
   );
};

export default KibonNavigation;
