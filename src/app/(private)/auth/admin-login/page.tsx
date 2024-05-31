'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

function LoginPage() {
    const route = useRouter();
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [error, setError] = React.useState('');



    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const form = { username, password };
            const response = await fetch('/api/auth/login', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (!response.ok) {
                setError('Ошибка входа: неверный логин или пароль');
                return;
            };
            const data = await response.json();
            if (data?.token) {
                route.push('/user');
            } else {
                setError('Failed to authenticate user');
            }
        } catch (err) {
            setUsername('Failed to authenticate user');
        }
    };

    return (
        <div>
            <h1>Вход</h1>

            <form className='flex flex-col items-center p-6'
                onSubmit={onSubmit}>
                <div className='w-80 bg-lightblue rounded-2xl pb-3 shadow'>
                    <div>
                        {/* <label htmlFor="username">Username</label> */}
                        <input className='h-6 my-6 mx-4 w-72 rounded-lg'
                            type="username"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value || '')}
                        />
                    </div>

                    <div>
                        <input className='h-6 my-6 mx-4 w-72 rounded-lg'
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value || '')}
                        />
                    </div>

                    <div className='flex justify-around'>
                        <button type="submit" className="bg-blue text-light mx-6 my-2 p-4 rounded-xl font-exo drop-shadow-lg
                                       hover:brightness-90 active:brightness-75">Войти</button>
                        <Link href="/registration">
                            <div className="bg-green text-light mx-6 my-2 p-4 rounded-xl font-exo drop-shadow-lg cursor-pointer
                                       hover:brightness-90 active:brightness-75">Регистрирация</div>
                        </Link>
                    </div>


                    {error && <p>{error}</p>}
                </div>
            </form>
        </div >
    )
}

export default LoginPage