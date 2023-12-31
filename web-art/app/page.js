import Image from 'next/image'
import MainStyle from '@/app/MainStyle.css'
import HeaderCs from './Components/HeaderCs'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import AffterBanner from './Components/AffterBanner'
import FooterCs from './Components/FooterCs'
import Accordion from './Components/Accordion'
import TeamOur from './Components/TeamOur'
import OurTools from './Components/OurTools'
import Packages from './Components/Packages'
import Samples from './Components/Samples'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeaderCs />
      <Banner />
      <AffterBanner />
      <Samples />
      <OurTools />
      <TeamOur />
      <Packages />
      <Accordion />
      <Contact />
      <FooterCs />
    </main>
  )
}
