import styles from './advantagesCard.module.css'
import Spline from '@splinetool/react-spline'

export default function AdvantagesCard({
    splineUrl,
}: IAdvantagesCard) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            <Spline scene={`${splineUrl}`} />

            </div>
            <div className={styles.textContainer}>
                <p>a little blurb here about the advantage that could go onto two lines or three lines</p>
            </div>

        </div>
    )
}