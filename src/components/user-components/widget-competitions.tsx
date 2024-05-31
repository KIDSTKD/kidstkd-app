import Image from "next/image";
import db from '@/utils/pocketbase/auth'
import { use } from 'react'

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");



export async function getResults() {

    const results = await pbClient.collection('users_competitions_2024').getFullList({
        expand: 'user',
        requestKey: 'competitions',
        filter: `user.name="${db.client.authStore.model?.name}"`
    });

    return results;
};

const WidgetCompetitions = () => {

    const res = use(getResults())

    return (
        <>
            {res.map((user: any) => (
                <>
                    <div className='has-tooltip flex flex-col items-center w-full'>
                        {/* <span className='tooltip'>Соревнования</span> */}
                        <Image className=" cursor-pointer" src='/icons/user/user-competitions.svg' alt='Соревнования' width={60} height={60} />
                        <div className="flex justify-center items-center font-bebasLight text-3xl text-blue py-3 cursor-pointer">{user?.competitions}</div>
                    </div>



                </>
            ))}
        </>
    );
}

export default WidgetCompetitions;