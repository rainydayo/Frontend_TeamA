import Image from 'next/image';
import Link from 'next/link';


export default async function TopMenu() {
    
    return (
        <div className={"fixed top-0 left-0 right-0 bg-custom-green h-24 z-30 flex gap-5 flex-row-reverse"}>
            <div className='flex flex-row absolute left-10 h-full '>
                <Link href="/">
                    <Image src={'/img/weblogo.png'} alt='logo' style={{ height: '100%', width: 'auto' }}
                    width={0} height={0} sizes='100vh'/>
                </Link>
            </div>
            
            
            

            <div className='flex flex-row absolute right-10 h-full'>

            <Link href="/cart">
                    <Image src={'/img/cart.png'} alt='logo' style={{ height: '30%', width: 'auto' }}
                    width={0} height={0} sizes='50vh'/>
            </Link>                

            <Link href="/">
                    Sign-in
            </Link>

            
            </div>

            
        </div>
    );
}