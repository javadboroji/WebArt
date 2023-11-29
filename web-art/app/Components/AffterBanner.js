import React from "react";
import affterImage from"@/public/asset/image/affter-Image.svg"
import Image from "next/image";
function AffterBanner() {
  return (
    <div className="container px-4 md:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ">
     <div className="flex items-center justify-between flex-col lg:flex-row  py-4">
     <div>
        <div className="after-bg-larg " >
        <div className="after-bg-small ">
           
        </div>
        </div>

      </div>
      <div className="basis-2/4 pr-6">
        <p className="lg:text-xl affter-text">
          استفاده از فناوری های پیشرفته وروش های نوین طراحی ، به ما امکان میدهد
          تا محصولی قدرتمند با کارایی بالا، رابط کاربری دلپذیر و امنیت برتر برای
          شما ایجاد کنیم. طراحی ریسپانسو و سازگاری با تمامی دستگاه ها از جمله
          کامپیوتر ها، تبلت ها و گوشی های هوشمند، از ویژگی های مهم محصول شما
          خواهد بود تا همه کاربران بتوانند به راحتی با شما در ارتباط باشند.
        </p>
      </div>
     </div>
    </div>
  );
}

export default AffterBanner;
