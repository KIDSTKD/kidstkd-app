import { use } from 'react'

import Image from 'next/image';
import Link from 'next/link';

import BG1 from '../../../public/layout/card/top_blue.svg'
import BG2 from '../../../public/layout/card/bg_narrow.svg'


import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

interface IUserRatio {
    id: string;
    rank: number;
}

export async function getBestAthlete() {
    pbClient.autoCancellation(false)
    const results = await pbClient.collection('users_ratio_2024').getFullList<IUserRatio>({
        requestKey: 'uset-ratio',
        expand: 'user',
        sort: 'rank',
        filter: 'rank <= 10',

    });

    return results;

};

export const dynamic = 'force-dynamic'
export const revalidate = 1


const BestAthlete = () => {

    const res = use(getBestAthlete())



    return (
        <>
            <h4>Лучшие спортсмены</h4>
            <div className='
                w-full h-[400px]
                flex
                overflow-x-auto overflow-y-hidden
                snap-x snap-center
                scroll-smooth	
                gap-4
                scrollbar-hide
            '>

                {res.map((data: any) => (
                    <div key={data.expand.user.id} className='w-80
                snap-start snap-always
                shrink-0
                relative'>
                        <Image src={`https://kidstkd.pockethost.io/api/files/_pb_users_auth_/${data.expand.user.id}/${data.expand.user.avatar}`}
                            width={320} height={320} alt=''
                            className='absolute z-20 top-10'
                        />
                        <div className='absolute top-0'><Image src={BG1} alt='Kidstkd' /></div>
                        <div className='absolute z-30 bottom-0'><Image src={BG2} alt='Kidstkd' /></div>

                        <div className='absolute z-10 top-1 w-80
                    text-light font-bebasRegular text-xl text-center
                '>{data.expand.user.name}</div>
                        <div className='absolute z-40 bottom-1 w-80
                    text-light font-bebasRegular text-2xl text-center
                '>{data.expand.user.level}</div>
                        <div className='absolute z-40 bottom-10 w-80
                    text-light font-bebasRegular text-2xl text-center
                '>рейтинг - {data.ratio}</div>
                    </div>


                ))}
            </div>

        </>
    );
}

export default BestAthlete;

