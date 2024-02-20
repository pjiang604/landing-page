import FeaturesCard from '@/components/PageComponents/FeaturesCard/featuresCard'
import styles from './features.module.css'
import Headline from '@/components/PageComponents/Headline/headline'
import template from '../../../../public/images/template.png'
import Image from 'next/image'


export default function Features() {
    return (
        <div className={``}>
            <Headline
                headline='Features'
                text='this is where the blurb goes' />
            <div className={styles.bodyContainer}>
                <div className={styles.heroImage}>

                    <Image
                        src={template}
                        alt='template' />
                </div>
                <div className={styles.textSubContainer}>
                    <FeaturesCard
                        featureName='Feature #1'
                        featureDesc='description here' />
                    <FeaturesCard
                        featureName='Feature #2'
                        featureDesc='description here' />
                    <FeaturesCard
                        featureName='Feature #3'
                        featureDesc='description here' />
                </div>
            </div>

        </div>
    )
}