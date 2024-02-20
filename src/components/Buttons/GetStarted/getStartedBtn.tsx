import styles from './getStartedBtn.module.css'


export default function GetStartedBtn({
    text = "Get Started"
}: IGetStarted) {
    return (
        <button className={styles.btnContainer}>
            <h4>{text}</h4>
        </button>
    )
}