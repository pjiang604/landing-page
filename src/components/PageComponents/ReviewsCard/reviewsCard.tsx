import styles from './reviewsCard.module.css'
import Image from 'next/image'
import star from '../../../../public/images/stars/star.png'

export default function ReviewsCard({
    text,
    name,
    location
}: IReviewsCard) {
    return (
        <div className={styles.container}>
            <div className={styles.stars}>
                <Image
                    src={star}
                    alt='star'
                    className={styles.starImg}
                />
                <Image
                    src={star}
                    alt='star'
                    className={styles.starImg}
                />
                <Image
                    src={star}
                    alt='star'
                    className={styles.starImg}
                />
                <Image
                    src={star}
                    alt='star'
                    className={styles.starImg}
                />
                <Image
                    src={star}
                    alt='star'
                    className={styles.starImg}
                />
            </div>
            <p>{text}</p>
            <div className={styles.personContainer}>
                <p><b>{name}</b></p>
                <p>{location}</p>
            </div>

        </div>
    )
}