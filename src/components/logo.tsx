import KIDSTKD from '../../public/layout/kidstkd.svg'

import Image from 'next/image';
import Link from 'next/link';




const Logo = () => {


    return (
        <Link href="/" passHref className='grid-in-logo bg-blue transition-colors w-full flex items-center justify-center'>
            <Image src={KIDSTKD} alt='Тхэквондо в Уссурийске' width={360} height={142}
                className=' 
                           p-1 
                           cursor-pointer
                           
                           '/>
        </Link>
    );
};

export default Logo;