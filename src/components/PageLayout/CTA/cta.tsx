import styles from './cta.module.css'
import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'
import Headline from '@/components/PageComponents/Headline/headline'
import Image from 'next/image'
import placeholder from '../../../../public/images/template.png'

export default function CTA() {
    return (
        <div className={``}>
            <Headline
                headline='CTA2'
                text='this is where the cta blurb goes' />
            <div className={styles.bodyContainer}>
                <div className={styles.heroImage}>
                    <Image
                        src={placeholder}
                        alt="placeholder"
                        className={styles.image}
                    />

                </div>
                <div className={styles.textContainer}>
                    <div className={styles.textSubContainer}>
                        <h1>Ready for it?</h1>
                        <h3>Begin your Canadian experience today.</h3>
                    </div>
                    <div className={styles.btnContainer}>
                        <GetStartedBtn />
                    </div>

                </div>
            </div>


        </div>
    )
}