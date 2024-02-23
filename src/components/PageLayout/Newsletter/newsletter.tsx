import TextInput from '@/components/PageComponents/TextInput/textInput'
import styles from './newsletter.module.css'
import Headline from '@/components/PageComponents/Headline/headline'

export default function Newsletter() {
    return (
        <div className={`mt-10`}>
            <Headline
                headline="Stay Up To Date"
                text="Sign up for Amplify's weekly e-newsletter for the latest on Canadian art!" />
            <div className={styles.bodyContainer}>
                <TextInput />
            </div>


        </div>
    )
}