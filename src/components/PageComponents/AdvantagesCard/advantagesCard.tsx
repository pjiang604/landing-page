import styles from './advantagesCard.module.css'
import Spline from '@splinetool/react-spline'

export default function AdvantagesCard({
    splineUrl,
    text,
}: IAdvantagesCard) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Spline scene={`${splineUrl}`} />

            </div>
            <div className={styles.textContainer}>
                <p>{text}</p>
            </div>

        </div>
    )
}