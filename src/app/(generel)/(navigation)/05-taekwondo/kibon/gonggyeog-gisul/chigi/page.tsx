import Heading from '@/components/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Удары (чхиги)'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}

export default function Chigi() {
    return (
        <>
            <Heading text={headerTitle} />
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Ап чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Патхансон ап чхиги</p>
                        <p className='indent-12 cursor-pointer'>Агымсон ап чхиги (кхальчеби)</p>
                        <p className='indent-12 cursor-pointer'>Ольгуль тынчумок ап чхиги</p>
                        <p className='indent-12 cursor-pointer'>Ольгуль тынчумок ап чхиги</p>
                        <p className='indent-12 cursor-pointer'>Мечумок ап чхиги</p>
                        <p className='indent-12 cursor-pointer'>Има ап чхиги (пак чхиги)</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Паккат чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Ольгуль тынчумок паккат чхиги</p>
                        <p className='indent-12 cursor-pointer'>Мок сонналь паккат чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Ан чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Мок сонналь ан чхиги</p>
                        <p className='indent-12 cursor-pointer'>Мечумок ан чхиги</p>
                        <p className='indent-12 cursor-pointer'>Ту чумок ан чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Нэрё чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Мечумок нэрё чхиги</p>
                        <p className='indent-12 cursor-pointer'>Пхальккумчхи нэрё чхиги</p>
                        <p className='indent-12 cursor-pointer'>Тынчумок нэрё чхиги</p>
                        <p className='indent-12 cursor-pointer'>Соннальтын нэрё чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Оллё чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Пхальккумчхи оллё чхиги</p>
                        <p className='indent-12 cursor-pointer'>Мурып оллё чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Ёп чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Мок сонналь ёп чхиги</p>
                        <p className='indent-12 cursor-pointer'>Пхальккумчхи ёп чхиги</p>
                        <p className='indent-12 cursor-pointer'>Ольгуль тынчумок ёп чхиги</p>
                    </div>
                </div>
                <div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Монэ чхиги</h5>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Толлё чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Ольгуль пхальккумчхи толлё чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Тви чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Пхальккумчхи тви чхиги</p>
                        <p className='indent-12 cursor-pointer'>Ольгуль пхальккумчхи тви чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Чебипхум чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Мок чебипхум ан чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Тангё чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Тхок тынчумок тангё кодыро ап чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Пхёчок чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Арэ мечумок пхёчок ан чхиги</p>
                        <p className='indent-12 cursor-pointer'>Ольгуль мечумок пхёчок ан чхиги</p>
                        <p className='indent-12 cursor-pointer'>Пхальккумчхи пхёчок ан чхиги</p>
                    </div>
                    <div className='hover:underline hover:bg-subblue hover:bg-opacity-25'>
                        <h5 className='cursor-pointer'>Кодыро чхиги</h5>
                        <p className='indent-12 cursor-pointer'>Ольгуль пхальккумчхи кодыро чхиги</p>
                        <p className='indent-12 cursor-pointer'>Пхальккумчхи кодыро ёп чхиги</p>
                        <p className='indent-12 cursor-pointer'>Ольгуль тынчумок кодыро ап чхиги</p>
                        <p className='indent-12 cursor-pointer'>Мок агымсон кодыро ап чхиги (кодыро кхальчеби)</p>
                    </div>
                </div>
            </div>

        </>
    )
}