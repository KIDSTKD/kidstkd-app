

import { use } from 'react'
import PocketBase from "pocketbase";
export const pbClient = new PocketBase("https://kidstkd.pockethost.io");



interface IKibon {
    params: {
        kisul_group: string,
        kisul: string,
        kibon_group: string,
        kibon: string,

    }
    name: string,

}


import { Metadata } from "next"

export async function generateMetadata({
    params,
}: IKibon): Promise<Metadata> {
    return {
        title: params.kisul_group,
        description: '111',
        openGraph: {
            images: '/img/05/kibon/kibon.png',
            title: "1111",
            description: "1111",
            url: 'https://kidstkd.ru/' + params.kisul_group + "/" + params.kisul + "/" + params.kibon_group,
        },
        alternates: {
            canonical: 'https://kidstkd.ru/' + params.kisul_group + "/" + params.kisul + "/" + params.kibon_group,
        },
    }
}


export async function getKibon() {
    pbClient.autoCancellation(false)
    const results = await pbClient.collection('05_kibon').getOne<IKibon>('98lrn4m47aceek9', {
    });
    return results;
};

export const dynamic = 'force-dynamic'
export const revalidate = 1


export default async function KibonPage() {

    const res = use(getKibon())
    return (
        <>
            <p>test</p>

        </>
    )
}