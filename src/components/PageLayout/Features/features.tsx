import FeaturesCard from '@/components/PageComponents/FeaturesCard/featuresCard'
import styles from './features.module.css'
import Headline from '@/components/PageComponents/Headline/headline'
import Spline from '@splinetool/react-spline'


export default function Features() {
    return (
        <div className={``}>
            <Headline
                headline='Built with Canadians in Mind'
                text='Amplify offers unique and exclusive features to get you started on your Canadian art journey!' />
            <div className={styles.bodyContainer}>
                <div className={styles.heroImage}>
                    <Spline scene="https://prod.spline.design/QBtGQ9OoP0TiohBH/scene.splinecode" />
                </div>
                <div className={styles.textSubContainer}>
                    <FeaturesCard
                        featureName='All Canadian Music and Art'
                        featureDesc='Amplify excusively features Canadian artists. Find the best of the best in music and art right from your back door!' />
                    <FeaturesCard
                        featureName='Search for What You Want'
                        featureDesc="Have specific tastes? Search for your favourite Candian artists or let Amplify show you something new based on what you're feeling!" />
                    <FeaturesCard
                        featureName='Listen on Demand'
                        featureDesc='Connect with your Spotify account and start listening instantly!' />
                </div>
            </div>

        </div>
    )
}