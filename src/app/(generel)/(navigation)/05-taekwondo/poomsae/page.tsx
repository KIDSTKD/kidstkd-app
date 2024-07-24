import Heading from '@/components/ui/heading'

import { Metadata } from 'next'
const headerTitle = 'Пхумсэ'
export const metadata: Metadata = {
    title: headerTitle,
    description: headerTitle + ' - KIDSTKD',
}

export default function Taekwondo() {
    return (
        <div>
            <Heading text={headerTitle} />
            <p>Пхумсэ (кор. 품새) - технический комплекс, представляющий из себя набор различных элементов - блоков, ударов, перемещений и т.п. Количество регламентированных пхумсэ - 17: 8 пхумсэ - начального уровня (югыпчха пхумсэ или тхэгык пхумсэ) и 9 мастерских пхумсэ (юданчха пхумсэ). Также пхумсэ используется для аттестации на пояса. В зависимости от гыпа, для каждого пояса существует определенное количество пхумсэ, например на 1 гып − 8 пхумсе, также после первого кыпа идут даны, это степени чёрного пояса.</p>
        </div>
    )
}