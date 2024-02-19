import styles from './headline.module.css'

export default function Headline({
    headline,
    text
}: IHeadline){
    return(
        <div className={`w-full text-center`}>
            <h2>{headline}</h2>
            <p>{text}</p>
        </div>
    )
}