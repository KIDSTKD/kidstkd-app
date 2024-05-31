'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h1>Ошибка сайта</h1>
            <p>Если вы видите эту ошибку, это означает, что запрашиваемая страница не найдена на сервере. К сожалению, это может произойти по разным причинам: страница была удалена, перемещена или ее адрес был изменен.</p>
            <p>Попробуйте вернуться на <Link href="/">главную </Link>страницу.</p>
            <button
                onClick={
                    () => reset()
                }
            >
                <p className='curson-pointer'>Перезагрузить страницу</p>
            </button>
        </div>
    )
}