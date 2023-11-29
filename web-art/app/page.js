import Image from 'next/image'
import MainStyle from '@/app/MainStyle.css'
import HeaderCs from './Components/HeaderCs'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeaderCs />
      <Banner />
      <Contact />
      <h1> WebArt</h1>
    </main>
  )
}
