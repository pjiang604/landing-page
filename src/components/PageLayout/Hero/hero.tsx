import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'
import styles from './hero.module.css'
import Image from 'next/image'
import placeholder from '../../../../public/images/template.png'


export default function Hero() {
    return (
        <div className={`${styles.heroContainer}`}>
            <div className={styles.textContainer}>
                <div className={styles.textSubContainer}>
                    <span className={styles.heroText}>AMPLIFY</span>
                    <h3>Canadian Music and Art.</h3>
                    <h4>Curated just for you.</h4>
                </div>
                <div>
                    <GetStartedBtn />
                </div>

            </div>

            <div className={styles.heroImage}>
                <Image
                    src={placeholder}
                    alt='placeholder'
                />
            </div>

        </div>
    )
}