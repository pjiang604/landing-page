import styles from './advantagesCard.module.css'

export default function AdvantagesCard() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.image}>
                    image here
                </div>

            </div>
            <div className={styles.textContainer}>
                <p>a little blurb here about the advantage that could go onto two lines or three lines</p>
            </div>

        </div>
    )
}