import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderNav from '@/components/Navigation/HeaderNav/headerNav'
import Hero from '@/components/PageLayout/Hero/hero'
import Features from '@/components/PageLayout/Features/features'
import Advantages from '@/components/PageLayout/Advantages/advantages'
import Reviews from '@/components/PageLayout/Reviews/reviews'
import Pricing from '@/components/PageLayout/Pricing/pricing'
import CTA from '@/components/PageLayout/CTA/cta'
import Newsletter from '@/components/PageLayout/Newsletter/newsletter'
import FooterNav from '@/components/Navigation/FooterNav/footerNav'
import ScrollAnimation from 'sgk-react-animation-scroll'
import "animate.css/animate.compat.css"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const offset = 25
  const duration = 2

  return (
    <main className="flex flex-col gap-4`">
      <HeaderNav />
      <div className={`h-full w-full p-pagePadding flex flex-col gap-12`}>
        <Hero />
        <ScrollAnimation animateIn='bounceInUp' duration={duration} offset={offset} animateOnce={true}>
          <Features />
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInUp' duration={duration} offset={offset} animateOnce={true}>
          <Advantages />
        </ScrollAnimation>
      </div>
      <div className={`h-full w-full `}>
        <ScrollAnimation animateIn='bounceInUp' duration={duration} offset={offset} animateOnce={true}>
          <Reviews />
        </ScrollAnimation>
      </div>
      <div className={`h-full w-full p-pagePadding flex flex-col gap-12`}>
        <ScrollAnimation animateIn='bounceInUp' duration={duration} offset={offset} animateOnce={true}>
          <Pricing />
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInUp' duration={duration} offset={offset} animateOnce={true}>
          <CTA />
          <Newsletter />
        </ScrollAnimation>
      </div>
      <FooterNav />
    </main>
  )
}
