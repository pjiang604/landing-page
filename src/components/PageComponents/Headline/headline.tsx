import styles from './headline.module.css'

export default function Headline({
    headline,
    text
}: IHeadline){
    return(
        <div className={styles.container}>
        <div className={`${styles.width} w-full text-center mb-8`}>
            <h2>{headline}</h2>
            <p>{text}</p>
        </div>
        </div>

    )
}