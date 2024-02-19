import Logo from '@/components/Logo/logo'
import styles from './headerNav.module.css'
import Link from 'next/link'
import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'

export default function HeaderNav() {
    return (
        <header className={`p-pagePadding ${styles.header}`}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <div className={styles.linksContainer}>
                <Link href={'/'}><h4>Pricing</h4></Link>
                <Link href={'/'}><h4>About</h4></Link>
                <GetStartedBtn />
            </div>

        </header>
    )
}