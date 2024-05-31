'use client';
import Image from 'next/image';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react'

function Logout() {
    const router = useRouter();
    const [error, setError] = React.useState('');
    const onLogout = async () => {
        try {
            deleteCookie('pb_auth');
            localStorage.clear();
            router.push('/auth/login');
        } catch (err) {
            setError('Failed to log out');
        }
    };
    return (
        <div>
            <button onClick={onLogout} className="mr-5 flex items-center h-full">
                <p className='text-light hidden lg:flex cursor-pointer'>Выход</p>
                <Image src='/icons/buttons/sign-out.svg' alt='Выход' height={30} width={30} />
            </button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Logout