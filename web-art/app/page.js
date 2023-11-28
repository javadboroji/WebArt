import Image from 'next/image'
import MainStyle from '@/app/MainStyle.css'
import HeaderCs from './Components/HeaderCs'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeaderCs />
      <h1> WebArt</h1>
    </main>
  )
}
