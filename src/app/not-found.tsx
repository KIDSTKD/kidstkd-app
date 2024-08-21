import LinkSpan from "@/components/ui/link-span";

import Heading from "@/components/ui/heading";

import { Metadata } from "next";
const headerTitle = "Страница не найдена";
export const metadata: Metadata = {
   title: headerTitle,
   description: "Спортивные секции для детей в Уссурийске. Олимпийское тхэквондо для мальчиков и девочек от 4 лет. Бесплатное пробное занятие",
};

export default function NotFound() {
   return (
      <div className="min-h-dvh flex flex-col justify-center items-center">
         <Heading text={headerTitle} />
         <p>
            Если вы видите эту ошибку, это означает, что запрашиваемая страница не найдена на сервере. К сожалению, это может произойти по разным
            причинам: страница была удалена, перемещена или ее адрес был изменен.
         </p>
         <p>
          <LinkSpan text={"Вернуться на главную страницу"} href={"/"} />
         </p>
      </div>
   );
}
