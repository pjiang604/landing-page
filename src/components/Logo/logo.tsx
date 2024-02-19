import styles from './logo.module.css'
import Image from 'next/image'
import logo from '../../../public/images/logo/logo.png'


export default function Logo() {
    return (
        <Image
            src={logo}
            alt='Amplify logo'
            className={styles.logo}
        />
    )
}