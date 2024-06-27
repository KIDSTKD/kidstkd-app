import "@/app/globals.css";
import KibonNavigation from "../../../../../components/kibon-components/kibon-navigation";

export default function KibonLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <KibonNavigation />
         <div>{children}</div>
      </>
   );
}
