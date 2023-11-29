import Link from "next/link";
import React from "react";
import social from '@/public/asset/image/Social-Icons.svg'
import social1 from '@/public/asset/image/Social-insta.svg'
import social2 from '@/public/asset/image/Social-watsapp.svg'
import social3 from '@/public/asset/image/Social-tel.svg'
import FooterLogo from "@/public/asset/image/footer-log.svg"
import Image from "next/image";
function FooterCs() {
  return (
    <footer className="m-auto mt-40">
     <div className="container px-4 md:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl m-auto">
        <div className="footer-logo mt-24">
            <Image src={FooterLogo} />
        </div>
      <div className="flex justify-between items-center py-8">
        <div className="basis-1/3 flex ">
          <ul className="px-4 flex md:flex-col ">
            <li className="py-2">
              <Link href="/" className="text-EEE9DA"> درباره ما</Link>
            </li>
            <li className="py-2">
              <Link href="/" className="text-EEE9DA"> تیم ما</Link>
            </li>
            <li className="py-2">
              <Link href="/" className="text-EEE9DA"> نمونه کارها</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/3 flex flex-col items-center">
          <span className="text-center text-EAE7B1"> راه های ارتباطی</span>
          <div className="my-4 flex justify-center">
            <span className="text-EEE9DA">
                 شماره تماس  :09123456789
            </span>
          </div>
          <div className="flex mt-6 justify-center">
            <Link href="/" className="mx-4   trans-top-left">
              <Image src={social} />
            </Link>
            <Link href="/" className="mx-4 trans-top-left">
              <Image src={social1} />
            </Link>
            <Link href="/" className="mx-4 trans-top-left">
              <Image src={social2} />
            </Link>
            <Link href="/" className="mx-4 trans-top-left">
              <Image src={social3} />
            </Link>
          </div>
        </div>
        <div className="basis-1/3 flex justify-end">
            <div className="w-40 h-40 bg-slate-500"></div>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default FooterCs;
