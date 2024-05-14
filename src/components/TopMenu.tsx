import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';


export default async function TopMenu() {
    
    return (
        <div className={"fixed top-0 left-0 right-0 bg-teal-500 h-24 z-30 flex gap-5 flex-row-reverse"}>
            <div className='flex flex-row absolute left-0 h-full '>
                {/* <Link href="/">
                    <Image src={'/img/weblogo.png'} className={styles.logoimg} alt='logo'
                    width={0} height={0} sizes='100vh'/>
                </Link> */}
            </div>
            

            <div className='flex flex-row absolute right-0 h-full'>
            
            </div>

            
        </div>
    );
}