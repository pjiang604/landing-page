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
                    tier="Pricing Tier"
                    phrase="for casual listeners"
                    price="FREE"
                    list1="Access to Vancouver Art"
                    list2="Pre-curated music playlists"
                    list3="Pre-curated art playlists"
                    large={false}
                    monthly="free"
                />
                <PricingCard
                    tier="Pricing Tier"
                    phrase="for casual listeners"
                    price="$4.99"
                    list1="Access to art in British Columbia"
                    list2="Monthly custom music playlists"
                    list3="Monthly custom art playlists"
                    list4="Exclusive art and music for members"
                    large={true}
                    monthly="paid"
                />
                <PricingCard
                    tier="Pricing Tier"
                    phrase="for casual listeners"
                    price="$22.99"
                    list1="Access to art in Canada"
                    list2="Monthly custom music playlists"
                    list3="Monthly custom art playlists"
                    list4="Exclusive art and music for members"
                    list5='Includes Spotify Premium membership'
                    large={false}
                    monthly="paid"
                />
            </div>

        </div>
    )
}