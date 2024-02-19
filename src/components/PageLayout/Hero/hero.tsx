import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'
import styles from './hero.module.css'
import Image from 'next/image'


export default function Hero() {
    return (
        <div className={`${styles.heroContainer} p-componentPadding`}>
            <div className={styles.textContainer}>
                <div className={styles.textSubContainer}>
                    <span className={styles.heroText}>AMPLIFY</span>
                    <h3>Canadian Music and Art.</h3>
                    <h4>Curated just for you.</h4>
                </div>
                <GetStartedBtn />
            </div>

            <div className={styles.heroImage}>
                Spline Animation Here
            </div>

        </div>
    )
}