import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'
import styles from './hero.module.css'
import Spline from '@splinetool/react-spline'


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
            <Spline scene="https://prod.spline.design/YgDXsXLowz0RAxsF/scene.splinecode" />
            </div>

        </div>
    )
}