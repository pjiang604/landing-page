
import AdvantagesCard from '@/components/PageComponents/AdvantagesCard/advantagesCard'
import styles from './advantages.module.css'
import Headline from '@/components/PageComponents/Headline/headline'


export default function Advantages() {
    return (
        <div className={``}>

            <Headline
                headline="Advantages"
                text="The blurb for advantages goes in here" />
            <div className={styles.bodyContainer}>
                <AdvantagesCard />
                <AdvantagesCard />
                <AdvantagesCard />
            </div>
        </div>
    )
}