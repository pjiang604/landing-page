import Logo from '@/components/Logo/logo'
import styles from './footerNav.module.css'
import Image from 'next/image'
import gitHub from '../../../../public/images/logo/gitHub.png'


export default function FooterNav() {
    return (
        <div className={`${styles.container} p-pagePadding `}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <p>© Patricia jiang</p>
            <Image
                src={gitHub}
                alt='github logo'
                className={styles.github}/>
        </div>
    )
}