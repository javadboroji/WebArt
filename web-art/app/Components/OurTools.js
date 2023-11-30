import Image from "next/image";
import React from "react";
import logo from '@/public/asset/image/footer-log.svg'
import cSharp from "@/public/asset/image/CSharp 1.svg"
import figma from "@/public/asset/image/png-transparent-figma-ink-social-media-icon_prev_ui 1.svg"
import react from "@/public/asset/image/react.svg"
import angular from "@/public/asset/image/Angular.svg"
import next from "@/public/asset/image/next.svg"
function OurTools() {
  return (
    <div className="container px-4 md:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl m-auto my-14 ">
      <div className="flex flex-col xl:flex-row items-center xl:justify-between py-11">
      <div className="w-full xl:w-1/2 ">
          <div className="flex flex-col ">
            <h3 className="text-3xl font-semibold py-8 text-3C6255 text-center lg:text-start">
              ابزارهای ما
            </h3>
            <span className="lg:text-xl text-base affter-text pt-10">
              استفاده از فناوری های پیشرفته وروش های نوین طراحی ، به ما امکان
              میدهد تا محصولی قدرتمند با کارایی بالا، رابط کاربری دلپذیر و امنیت
              برتر برای شما ایجاد کنیم. طراحی ریسپانسو و سازگاری با تمامی دستگاه
              ها از جمله کامپیوتر ها، تبلت ها و گوشی های هوشمند، از ویژگی های
              مهم محصول شما خواهد بود تا همه کاربران بتوانند به راحتی با شما در
              ارتباط باشند.
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-16 xl:mt-0 relative">
        <div className="tools-circle-logo">
                <Image src={logo} alt="logo" />
            </div>
          <div className="tools-circle">
            
            <div className="tools-circle-animation c">
                <Image src={cSharp} alt="cSharp"/>
            </div>
            <div className="tools-circle-animation react">
            <Image src={react} alt="react"/>
            </div>
            <div className="tools-circle-animation figma">
            <Image src={figma} alt="figma"/>
            </div>
            <div className="tools-circle-animation angular">
            <Image src={angular} alt="angular"/>
            </div>
            <div className="tools-circle-animation next">
            <Image src={next} alt="next"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default OurTools;
