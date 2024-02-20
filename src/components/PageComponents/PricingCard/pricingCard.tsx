import styles from './pricingCard.module.css'
import template from '../../../../public/images/template.png'
import Image from 'next/image'
import GetStartedBtn from '@/components/Buttons/GetStarted/getStartedBtn'

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
    monthly
}: IPricingCard) {
    return (
        <>
            {large ?
                <div className={styles.containerLg}>  {/*large size card */}
                    <div className={styles.heading}>
                        <h2>{tier}</h2>
                        <p>{phrase}</p>
                    </div>
                    <Image
                        src={template}
                        alt="template"
                    />
                    <div className={styles.price}>
                        <h1>{price}</h1>
                        {monthly === "paid" ?
                            <span>per month</span>
                            :
                            <span>no credit card!</span>}
                    </div>

                    {monthly ?
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
                    <Image
                        src={template}
                        alt="template"
                    />
                    <div className={styles.price}>
                        <h1>{price}</h1>
                        {monthly === "paid" ?
                            <span>per month</span>
                            :
                            <span>no credit card!</span>}
                    </div>
                    {monthly ?
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