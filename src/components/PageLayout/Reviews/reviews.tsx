
import ReviewsCard from '@/components/PageComponents/ReviewsCard/reviewsCard'
import styles from './reviews.module.css'
import Headline from '@/components/PageComponents/Headline/headline'
import { reviews } from '@/data/reviews'
import Carousel from 'nuka-carousel'
import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Reviews() {

    const [data, setData] = useState(reviews)

    const mobile = useMediaQuery('(max-width:449px)');
    const tablet = useMediaQuery('(min-width:450px)');
    const desktop = useMediaQuery('(min-width:825px)');

    const [slideNum, setSlideNum] = useState<number>()

    useEffect(() => {
        if (mobile) {
            setSlideNum(2)
        } else if (tablet){
            setSlideNum(4)
        } else {
            setSlideNum(6)
        }
    })

    return (
        <div className={``}>
            <Headline
                headline="Approved by Canadians"
                text="Don't just take it from us! Here's what other Canadians just like you have to say about Amplify." />
            <div className={styles.bodyContainer}>
                <div className={styles.carousel}>
                    <Carousel
                        slidesToShow={slideNum}
                        cellSpacing={10}
                        wrapAround={true}
                        autoplay={true}
                        defaultControlsConfig={{
                            nextButtonStyle: {
                                display: 'none'
                            },
                            prevButtonStyle: {
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