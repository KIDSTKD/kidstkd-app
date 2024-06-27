import Kibon from "@/components/kibon-components/single-kibon";

export default function KibonPage({ params }: { params: { id: string } }) {

  return (
    <>
<Kibon kibonId={params.id} />
   </>
  );
}

