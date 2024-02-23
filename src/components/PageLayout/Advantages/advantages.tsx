
import AdvantagesCard from '@/components/PageComponents/AdvantagesCard/advantagesCard'
import styles from './advantages.module.css'
import Headline from '@/components/PageComponents/Headline/headline'


export default function Advantages() {
    return (
        <div className={``}>

            <Headline
                headline="Why Amplify?"
                text="Streamline your way to supporting Canadian artists all in one app!" />
            <div className={styles.bodyContainer}>
                <AdvantagesCard
                splineUrl='https://prod.spline.design/DDS-Ds60SxFtDRJn/scene.splinecode'
                text="Find visual art from anywhere you are! We bring the art to you...wherever, whenever!" />
                <AdvantagesCard
                splineUrl='https://prod.spline.design/Ir5zDMhmqhj-qSKB/scene.splinecode' 
                text='Start supporting Canadian artists by using Amplify with exclusive Canadian content for members!'/>
                <AdvantagesCard
                splineUrl='https://prod.spline.design/zarzY72QCp9dVifN/scene.splinecode'
                text="Mix it up and discover new artists from across Canada that you'll love with curated playlists!" />
            </div>
        </div>
    )
}