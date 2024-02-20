import Logo from '@/components/Logo/logo'
import styles from './footerNav.module.css'
import Image from 'next/image'
import gitHub from '../../../../public/images/logo/gitHub.png'
import Link from 'next/link'


export default function FooterNav() {
    return (
        <div className={`${styles.container} p-pagePadding `}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <p>© 2024 Patricia jiang</p>
            <Link href="https://github.com/pjiang604/MDIA3109_FinalProject">
            <Image
                src={gitHub}
                alt='github logo'
                className={styles.github}/>
            </Link>

        </div>
    )
}