import Image from "next/image";

import { IUser } from "@/interfaces/user";
import WidgetCompetitions from "./widget-competitions";

import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");

import { cookies } from 'next/headers'
import db from '@/utils/pocketbase/auth'
import { use } from 'react'

export async function getRank() {

    pbClient.autoCancellation(false)

    const results = await pbClient.collection('users_ratio_2024').getFullList({
        expand: 'user',
        requestKey: 'competitions',
        filter: `user.name="${db.client.authStore.model?.name}"`
    });

    return results;
};

const getUser = async () => {
    const cookieStore = cookies();
    const result = await db.getUser(cookieStore);
    return result as IUser;
}

type ToString = string;

const data = [
    { id: 111, db: '1 дан', src: '/icons/user/grades/1dan.png' },
    { id: 112, db: '2 дан', src: '/icons/user/grades/2dan.png' },
    { id: 113, db: '3 дан', src: '/icons/user/grades/3dan.png' },
    { id: 121, db: '1 пхум', src: '/icons/user/grades/1poom.png' },
    { id: 122, db: '2 пхум', src: '/icons/user/grades/2poom.png' },
    { id: 123, db: '3 пхум', src: '/icons/user/grades/3poom.png' },
    { id: 130, db: '1 гып', src: '/icons/user/grades/1geup.png' },
    { id: 131, db: '2 гып', src: '/icons/user/grades/2geup.png' },
    { id: 132, db: '3 гып', src: '/icons/user/grades/3geup.png' },
    { id: 133, db: '4 гып', src: '/icons/user/grades/4geup.png' },
    { id: 134, db: '5 гып', src: '/icons/user/grades/5geup.png' },
    { id: 135, db: '6 гып', src: '/icons/user/grades/6geup.png' },
    { id: 136, db: '7 гып', src: '/icons/user/grades/7geup.png' },
    { id: 137, db: '8 гып', src: '/icons/user/grades/8geup.png' },
    { id: 138, db: '9 гып', src: '/icons/user/grades/9geup.png' },
    { id: 139, db: '10 гып', src: '/icons/user/grades/10geup.png' },

    { id: 220, db: 'КМС', src: '/icons/user/levels/kms.png' },
    { id: 221, db: '1 разряд', src: '/icons/user/levels/1.png' },
    { id: 221, db: '2 разряд', src: '/icons/user/levels/2.png' },
    { id: 221, db: '3 разряд', src: '/icons/user/levels/3.png' },
    { id: 211, db: '1 юношеский разряд', src: '/icons/user/levels/jun1.png' },
    { id: 212, db: '2 юношеский разряд', src: '/icons/user/levels/jun2.png' },
    { id: 213, db: '3 юношеский разряд', src: '/icons/user/levels/jun3.png' },
    { id: 214, db: 'б/р', src: '/icons/user/levels/nolevel.png' },

    { id: 30, db: 'KIDSTKD', src: '/layout/kidstkd.svg' },
    { id: 31, db: 'Приморский край', src: '/icons/user/team/pk.png' },
    { id: 32, db: 'Дальневосточный округ', src: '/icons/user/team/dfo.png' },
]

const WidgetAchivments = () => {

    const user = use(getUser())


    const belt = data.find(item => item.db === user.grade)
    const belt_src = belt?.src as ToString

    const level = data.find(item => item.db === user.level)
    const level_src = level?.src as ToString

    const team = data.find(item => item.db === user.member)
    const team_src = team?.src as ToString

    const rank = use(getRank())




    return (
        <>

            <div className='flex flex-row justify-around divide-x-4 divide-blue mb-6'>
                {rank.map((user: any) => (
                    <>
                        <div className='has-tooltip flex flex-col items-center justify-center w-full my-6'>
                            <h2 className='text-5xl text-blue font-bebasRegular'>#{user.rank}</h2>
                            {/* <span className='tooltip'>Место в рейтинге</span> */}
                        </div>
                    </>
                ))}

                <WidgetCompetitions />

                {rank.map((user: any) => (
                    <>
                        <div className='has-tooltip flex flex-col items-center w-full'>
                            {/* <span className='tooltip'>Подиумы</span> */}
                            <Image src='/icons/user/podium-outline.svg' alt="Подиумы" width={60} height={60} />
                            <div className="flex justify-center items-center font-bebasLight text-3xl text-blue py-3 cursor-pointer">{user?.podiums}</div>
                        </div>
                    </>
                ))}

            </div>

            <div className='flex flex-row justify-around divide-x-4 divide-blue mb-6 h-30'>

                <div className='has-tooltip flex flex-col items-center justify-center w-full'>
                    <Image src={belt_src} alt={user?.grade} width={80} height={80} />
                    {/* <span className='tooltip'>Техническая квалификация</span> */}

                </div>
                <div className='has-tooltip flex flex-col items-center justify-center w-full'>
                    <Image src={level_src} alt={user?.level} width={80} height={80} />
                    {/* <span className='tooltip'>Спортивная квалификация</span> */}

                </div>
                <div className='has-tooltip flex flex-col items-center justify-center w-full'>
                    <Image src={team_src} alt={user?.member} width={80} height={80} />
                    {/* <span className='tooltip'>Сборная команда</span> */}

                </div>
            </div>



        </>
    );
}

export default WidgetAchivments;