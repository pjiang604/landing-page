import styles from './pricingCard.module.css'
import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'
import Spline from '@splinetool/react-spline'

export default function PricingCard({
    tier,
    phrase,
    price,
    list1,
    list2,
    list3,
    list4,
    list5,
    large,
    monthly,
    splineUrl,
}: IPricingCard) {
    return (
        <>
            {large ?
                <div className={styles.containerLg}>  {/*large size card */}
                    <div className={styles.heading}>
                        <h2>{tier}</h2>
                        <p>{phrase}</p>
                    </div>
                    <div className={styles.splineContainer}>
                        <Spline scene={`${splineUrl}`} />
                    </div>

                    <div className={styles.price}>
                        <h1>{price}</h1>
                        {monthly === "paid" ?
                            <span>per month</span>
                            :
                            <span>no credit card!</span>}
                    </div>

                    {monthly === "paid" ?
                        <GetStartedBtn
                            text="Buy Now" />
                        :
                        <GetStartedBtn />
                    }
                    <div className={styles.list}>
                        <ul>
                            <li>{list1}</li>
                            <li>{list2}</li>
                            <li>{list3}</li>
                            {list4 && <li>{list4}</li>}
                            {list5 && <li>{list5}</li>}
                        </ul>
                    </div>
                </div>
                :
                <div className={styles.container}> {/*regular size card */}
                    <div className={styles.heading}>
                        <h3>{tier}</h3>
                        <p>{phrase}</p>
                    </div>
                    <div className={styles.splineContainer}>
                        <Spline scene={`${splineUrl}`} />
                    </div>
                    <div className={styles.price}>
                        <h1>{price}</h1>
                        {monthly === "paid" ?
                            <span>per month</span>
                            :
                            <span>no credit card!</span>}
                    </div>
                    {monthly === "paid" ?
                        <GetStartedBtn
                            text="Buy Now" />
                        :
                        <GetStartedBtn />
                    }

                    <div className={styles.list}>
                        <ul>
                            <li>{list1}</li>
                            <li>{list2}</li>
                            <li>{list3}</li>
                            {list4 && <li>{list4}</li>}
                            {list5 && <li>{list5}</li>}
                        </ul>
                    </div>
                </div>
            }
        </>

    )
}