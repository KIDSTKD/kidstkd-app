import Heading from '@/components/ui/heading'
import Mounth from '@/components/calendar-components/mounth'
import MounthData from '@/components/calendar-components/mounth-data'

import { Metadata, ResolvingMetadata } from 'next'
const headerTitle = 'Календарь'
type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    return {
        title: headerTitle + " - " + params.slug,
        description: headerTitle + " - " + params.slug + ' | KIDSTKD',

    }
}

async function getData(slug: string) {
    const res = await fetch(`https://api.npoint.io/a063c6dedea8e61c16ff/${slug}`, { next: { revalidate: 10 } });

    return res.json();
}

export default async function Calendar({
    params: { slug },
}: {
    params: { slug: string }

}) {

    const all = await getData(slug);

    const jan = all.filter(checkJan);
    function checkJan(table: any) {
        return table.mounth == 'jan';
    }

    const feb = all.filter(checkFeb);
    function checkFeb(table: any) {
        return table.mounth == 'feb';
    }

    const mar = all.filter(checkMar);
    function checkMar(table: any) {
        return table.mounth == 'mar';
    }

    const apr = all.filter(checkApr);
    function checkApr(table: any) {
        return table.mounth == 'apr';
    }

    const may = all.filter(checkMay);
    function checkMay(table: any) {
        return table.mounth == 'may';
    }

    const jun = all.filter(checkJun);
    function checkJun(table: any) {
        return table.mounth == 'jun';
    }

    const jul = all.filter(checkJul);
    function checkJul(table: any) {
        return table.mounth == 'jul';
    }

    const aug = all.filter(checkAug);
    function checkAug(table: any) {
        return table.mounth == 'aug';
    }

    const sep = all.filter(checkSep);
    function checkSep(table: any) {
        return table.mounth == 'sep';
    }

    const oct = all.filter(checkOct);
    function checkOct(table: any) {
        return table.mounth == 'oct';
    }

    const nov = all.filter(checkNov);
    function checkNov(table: any) {
        return table.mounth == 'nov';
    }

    const dec = all.filter(checkDec);
    function checkDec(table: any) {
        return table.mounth == 'dec';
    }


    return (
        <>

            <Heading text={headerTitle + " - " + slug} />

            <Mounth mounth='Январь' />
            {jan.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Февраль' />
            {feb.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Март' />
            {mar.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Апрель' />
            {apr.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Май' />
            {may.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Июнь' />
            {jun.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Июль' />
            {jul.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Август' />
            {aug.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Сентябрь' />
            {sep.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Октябрь' />
            {oct.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Ноябрь' />
            {nov.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

            <Mounth mounth='Декабрь' />
            {dec.map((posts: any) => (
                <MounthData date={posts.date} title={posts.title} etc={posts.etc} key={posts.title} />
            ))}

        </>
    )
}