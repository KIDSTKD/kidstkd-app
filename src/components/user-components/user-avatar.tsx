import Image from 'next/image';

import { IUser } from '@/interfaces/user'

import { cookies } from 'next/headers'
import db from '@/utils/pocketbase/auth'
import { use } from 'react'

const getUser = async () => {
    const cookieStore = cookies();
    const result = await db.getUser(cookieStore);
    return result as IUser;
}

const UserAvatar = () => {

    const user = use(getUser())

    return (
        <>
            <div className='float-none lg:float-right flex flex-col items-center m-6'>

                <div className='relative w-64 h-64'>
                    <div className="bg-gradient-to-r from-red to-blue w-64 h-64 rounded-full flex items-center justify-center animate-spin z-20">

                    </div>
                    <div className="w-60 h-60 bg-lightblue rounded-full motion-reduce:animate-spin absolute top-2 left-2 z-10">
                        <Image src={`https://kidstkd.pockethost.io/api/files/_pb_users_auth_/${user?.id}/${user?.avatar}`}
                            width={240} height={240} alt=''
                            className='rounded-full'
                        />
                    </div>
                </div>
                <h4>{user?.name}</h4>
            </div>
        </>
    );
}

export default UserAvatar;