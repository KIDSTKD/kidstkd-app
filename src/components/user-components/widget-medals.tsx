import Image from "next/image";
import db from '@/utils/pocketbase/auth'
import { use } from 'react'

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

export async function getResults() {

    pbClient.autoCancellation(false)

    const results = await pbClient.collection('users_competitions_2024').getFullList({
        expand: 'user',
        requestKey: 'competitions',
        filter: `user.name="${db.client.authStore.model?.name}"`
    });

    return results;
};

const WidgetMedals = () => {

    const res = use(getResults())

    return (
        <>
            {res.map((user: any) => (
                <>
                    <div key={user?.name} className='flex flex-row justify-around divide-x-4 divide-blue mb-6'>


                        <div className='has-tooltip flex flex-col items-center w-full'>
                            {/* <span className='tooltip'>Золото</span> */}
                            <Image className=" cursor-pointer" src='/icons/user/medals/gold.svg' alt='Золото' width={60} height={60} />
                            <div className="flex justify-center items-center font-bebasLight text-3xl text-blue py-3 cursor-pointer">{user?.gold}</div>
                        </div>

                        <div className='has-tooltip flex flex-col items-center w-full'>
                            {/* <span className='tooltip'>Серебро</span> */}
                            <Image className=" cursor-pointer" src='/icons/user/medals/silver.svg' alt='Серебро' width={60} height={60} />
                            <div className="flex justify-center items-center font-bebasLight text-3xl text-blue py-3 cursor-pointer">{user?.silver}</div>
                        </div>

                        <div className='has-tooltip flex flex-col items-center w-full'>
                            {/* <span className='tooltip'>Бронза</span> */}
                            <Image className=" cursor-pointer" src='/icons/user/medals/bronze.svg' alt='Бронза' width={60} height={60} />
                            <div className="flex justify-center items-center font-bebasLight text-3xl text-blue py-3 cursor-pointer">{user?.bronze}</div>
                        </div>

                    </div>
                </>
            ))}
        </>
    );
}

export default WidgetMedals;