import styles from './featuresCard.module.css'

export default function FeaturesCard({
    featureName,
    featureDesc
}: IFeaturesCard) {
    return (
        <div className={styles.featuresContainer}>
            <h3>{featureName}</h3>
            <p>{featureDesc}</p>
        </div>
    )
}