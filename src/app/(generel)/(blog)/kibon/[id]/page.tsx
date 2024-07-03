import Kibon from "@/components/kibon-components/single-kibon";
import KibonNavigation from "@/components/kibon-components/kibon-navigation";



export default function KibonPage({ params }: { params: { id: string } }) {
   return (
      <>
         <KibonNavigation />
         <Kibon kibonId={params.id} />
      </>
   );
}
