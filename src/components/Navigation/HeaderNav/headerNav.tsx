import Logo from '@/components/Logo/logo'
import styles from './headerNav.module.css'
import Link from 'next/link'
import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import Head from 'next/head';


export default function HeaderNav() {
    return (
        <>
            <Head>
                <title>Amplify | Your Canadian Music</title>
            </Head>
            <header className={`p-pagePadding ${styles.header}`}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.linksContainer}>
                    <GhostNavbar
                        floatButtonX={5}
                        floatButtonY={3}
                        fontColor='var(--black)'
                        styles={{
                            navigationBackground: {
                                backgroundColor: 'var(--white)'
                            }
                        }}
                    >
                        <ul>
                            <li><Link href={'/'}><h4>Pricing</h4></Link></li>

                            <li><Link href={'/'}><h4>About</h4></Link></li>

                            <li><Link href={'/'} className={styles.getStartedLink}>Get Started</Link></li>
                        </ul>
                    </GhostNavbar>

                </div>

            </header>
        </>

    )
}