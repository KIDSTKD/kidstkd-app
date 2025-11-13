import { use } from 'react'
import Image from "next/image";
import Link from "next/link";

import { IItemsCards } from '@/interfaces/items-cards';

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

export async function getGear() {
  pbClient.autoCancellation(false)
  const results = await pbClient.collection('06_gear').getFullList<IItemsCards>({
    requestKey: 'gear',
    sort: 'type',
  });

  return results;

};



const ItemCard = () => {

      const res = use(getGear())
    

    return (
        <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 pl-0 md:pl-4">

{res.map((gear: IItemsCards) => (

    <div key={gear.id} className="">
                        <Link href='https://t.me/tkd_store_ru'>

        <div  className="border-2 border-blue relative cursor-pointer" >
            <h5 className="absolute right-0 top-0 bg-blue rounded-bl-xl text-light indent-0 px-5 z-20">{gear.price}</h5>
            <Image src={pbClient.files.getUrl(gear, gear.img[0], { 'thumb': '360x360' })} alt={gear.title} width={360} height={360} className='scale-95 hover:scale-100 transition-transform' />
            
         </div>
    <h5 className="w-60 indent-0 text-center">{gear.title}</h5>

</Link>
    
    </div>

))}



</div>

</>



    )
}

export default ItemCard;



{/* <div className="flex flex-row justify-around">
    <div className="">
        <div  className="border-2 border-blue w-60 relative" >
            <h5 className="absolute right-0 top-0 bg-blue rounded-bl-xl text-light indent-0 px-5">4950</h5>
            <Image src={Hogu} alt="hogu" width={360}/>
         </div>
    <h5 className="w-60 indent-0 text-center">TUSAH Защитный жилет для тхэквондо WT aproved EZ-Fit</h5>
    
    </div>
</div> */}