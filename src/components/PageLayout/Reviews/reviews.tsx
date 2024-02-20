
import ReviewsCard from '@/components/PageComponents/ReviewsCard/reviewsCard'
import styles from './reviews.module.css'
import Headline from '@/components/PageComponents/Headline/headline'
import { reviews } from '@/data/reviews'
import { useState } from 'react'
import Carousel from 'nuka-carousel'

export default function Reviews() {

    const [data, setData] = useState(reviews)
    return (
        <div className={``}>
            <Headline
                headline="Reviews"
                text="The blurb for Reviews goes in here" />
            <div className={styles.bodyContainer}>
                <div className={styles.carousel}>
                    <Carousel
                        slidesToShow={5.5}
                        cellSpacing={10}
                        wrapAround={true}
                        autoplay={true}
                        defaultControlsConfig={{
                            nextButtonStyle:{
                                display: 'none'
                            },
                            prevButtonStyle:{
                                display: 'none'
                            }
                        }}
                        cellAlign='center'
                    >
                        {
                            data && data.review.map((r, index) => {
                                return (
                                    <ReviewsCard
                                        key={index}
                                        text={r.text}
                                        name={r.name}
                                        location={r.location} />
                                )
                            })
                        }
                    </Carousel>
                </div>

            </div>


        </div>
    )
}