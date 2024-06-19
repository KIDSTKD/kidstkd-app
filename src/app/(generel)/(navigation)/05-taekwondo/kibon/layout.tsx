import "@/app/globals.css"
import KibonNavigation from "./kibon-navigation";

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


