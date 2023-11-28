import React from "react";

function Banner() {
  return (
    <div className="banner-bg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="banner-whay"
      >
        <path
          fill="#EEE9DA"
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,213.3C840,171,960,85,1080,96C1200,107,1320,213,1380,266.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="banner-whay-2"
      >
        <path
          fill="#61876E"
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,213.3C840,171,960,85,1080,96C1200,107,1320,213,1380,266.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid justify-center grid-cols-1 lg:grid-cols-2 mt-28">
          <div className=" m-auto ">
            <h1 className="title-banner">
              طراحی بهترین <br/>وبسایت و نرم افزارهای تحت وب
            </h1>
            <span className="text-banner">
              ما به طور مداوم با جدیدترین تکنولوژی ها و روندها در زمینه طراحی و
              توسعه و پیاده سازی نرم افزار آشنا میشویم تا شما را در دنیای پویای
              تکنولوژی همراهی کنیم.
            </span>
          </div>
          <div >
            <div className="bg-banner-image">

            </div>
          </div>
        </div>
      </div>
      <div className="mouse-motion">

      </div>
    </div>
  );
}

export default Banner;
