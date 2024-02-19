import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderNav from '@/components/Navigation/HeaderNav/headerNav'
import Hero from '@/components/PageLayout/Hero/hero'
import Features from '@/components/PageLayout/Features/features'
import Advantages from '@/components/PageLayout/Advantages/advantages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <HeaderNav />
      <div className={`h-full w-full p-pagePadding`}>
        <Hero />
        <Features />
        <Advantages/>
      </div>
    </main>
  )
}
