import PricingCard from '@/components/PageComponents/PricingCard/pricingCard'
import styles from './pricing.module.css'
import Headline from '@/components/PageComponents/Headline/headline'

export default function Pricing() {
    return (
        <div className={`h-max`}>
            <Headline
                headline="Pricing"
                text="The blurb for pricing goes in here" />
            <div className={styles.bodyContainer}>
                <PricingCard
                    tier="Eighth Note"
                    phrase="for casual listeners"
                    price="FREE"
                    list1="Access to Vancouver Art"
                    list2="Pre-curated music playlists"
                    list3="Pre-curated art playlists"
                    large={false}
                    monthly="free"
                    splineUrl="https://prod.spline.design/hc99Hw3sHmRBOfg0/scene.splinecode"
                />
                <PricingCard
                    tier="Duplet"
                    phrase="for the enthusiasts "
                    price="$4.99"
                    list1="Access to art in British Columbia"
                    list2="Monthly custom music playlists"
                    list3="Monthly custom art playlists"
                    list4="Exclusive art and music for members"
                    large={true}
                    monthly="paid"
                    splineUrl="https://prod.spline.design/p5xrvGlH82mMJMwP/scene.splinecode"
                />
                <PricingCard
                    tier="Triplet"
                    phrase="for the collectors"
                    price="$22.99"
                    list1="Access to art in Canada"
                    list2="Weekly custom music playlists"
                    list3="Weekly custom art playlists"
                    list4="Exclusive art and music for members"
                    list5='Includes Spotify Premium membership'
                    large={false}
                    monthly="paid"
                    splineUrl="https://prod.spline.design/u4CiW3Fh1z1uusAo/scene.splinecode"
                />
            </div>

        </div>
    )
}