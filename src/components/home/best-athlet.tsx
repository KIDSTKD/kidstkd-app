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

            <div className="flex flex-col">

                {res.map((data: any) => (
                    <>
                        <Link key={data.user} href='/' passHref>
                            <div className='
                w-[300px] h-[400px]
                snap-start snap-always
                shrink-0
                relative
            '>
                                <Image className='absolute top-10' src='../../../public/icons/footer/user' alt={data.user} width={300} height={300} />
                                <div className='absolute top-0'><Image src={BG1} alt="Фон" /></div>
                                <div className='absolute bottom-0'><Image src={BG2} alt='Фон' /></div>

                                <div className='
                    absolute z-10 top-1 w-[300px]
                    text-light font-bebasRegular text-xl text-center
                '>{data.user}</div>
                                <div className='
                    absolute z-10 bottom-1 w-[300px]
                    text-light font-bebasRegular text-xl text-center
                '>{data.rank}</div>
                            </div>
                        </Link>
                    </>
                ))}

            </div>
        </>
    );
}

export default BestAthlete;

