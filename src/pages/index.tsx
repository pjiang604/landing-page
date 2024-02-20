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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <HeaderNav />
      <div className={`h-full w-full p-pagePadding`}>
        <Hero />
        <Features />
        <Advantages />
      </div>
      <div className={`h-full w-full`}>
        <Reviews />
      </div>
      <div className={`h-full w-full p-pagePadding`}>
        <Pricing />
        <CTA/>
        <Newsletter/>
      </div>
      <FooterNav/>
    </main>
  )
}
