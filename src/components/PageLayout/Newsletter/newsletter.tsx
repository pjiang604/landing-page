import TextInput from '@/components/PageComponents/TextInput/textInput'
import styles from './newsletter.module.css'
import Headline from '@/components/PageComponents/Headline/headline'

export default function Newsletter() {
    return (
        <div className={``}>
            <Headline
                headline="Newsletter"
                text="The blurb for Newsletter goes in here" />
            <div className={styles.bodyContainer}>
                <TextInput />
            </div>


        </div>
    )
}