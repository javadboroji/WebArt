"use client"
import React,{useState ,useEffect} from "react";
import Link from "next/link";

const HeaderCs = () => {
  const links = [
    {
      name: "نمونه کارها ",
      link: "/",
    },
    {
      name: "بسته ها",
      link: "/",
    },
    {
      name: "سوالات متداول",
      link: "/",
    },
    {
      name: " درباره ما",
      link: "/",
    },
    {
      name: "ارتباط با ما",
      link: "/",
    },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      console.log(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  const navStyle = {
    width: '100%',
    position: 'fixed',
    zIndex: 12,
    transition:' .3s ',
    opacity: scrollPosition > 80 && scrollPosition < 400 ? 0 :1 ,
    transform:scrollPosition > 80 && scrollPosition < 400 ? 'translateY(-5rem)' :'translateY(0)' ,
    background:scrollPosition > 390?'rgba(60, 98, 85, 1)':'transparent',
    boxShadow:scrollPosition > 390? 'rgba(0, 0, 0, 0.1) 0px 0px 20px':'none',
  };
  return (
    <>
      <nav className="  w-full fixed z-10" style={navStyle}>
      <div className="container mx-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              width="104"
              height="48"
              viewBox="0 0 104 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_138_53)">
                <path
                  d="M12.8855 7.53156C20.5379 17.5983 28.0999 27.5415 35.7195 37.5671C41.2132 30.3689 46.678 23.2119 52.2005 15.9808C54.9226 19.5943 57.5955 23.1461 60.3423 26.7925C58.8825 28.3111 57.4351 29.8133 55.9136 31.3937C54.643 29.7145 53.4259 28.1012 52.1635 26.4303C46.6739 33.6202 41.2255 40.7566 35.7154 47.9754C23.8687 32.402 12.059 16.8698 0.166992 1.22649C0.479506 1.21003 0.685107 1.19357 0.886596 1.19357C8.61308 1.19357 16.3396 1.19768 24.0702 1.18945C24.5102 1.18945 24.7898 1.30469 25.0612 1.67098C30.6329 9.0996 36.2253 16.5159 41.8094 23.9321C41.867 24.0103 41.9246 24.0927 42.015 24.2244C40.7156 25.9282 39.408 27.6362 38.0469 29.4182C37.3273 28.4757 36.6447 27.5786 35.9662 26.6814C31.295 20.4751 26.6196 14.2729 21.9607 8.05424C21.6646 7.65914 21.3645 7.51098 20.871 7.5151C18.2558 7.53979 15.6405 7.52745 12.8814 7.52745L12.8855 7.53156Z"
                  fill="#A6BB8D"
                />
                <path
                  d="M33.2893 1.21826C38.7994 0.600923 44.252 -0.0411076 49.7538 4.82049e-05C54.7047 0.0370884 59.598 0.539189 64.3186 2.14838C67.3409 3.17727 70.1083 4.66711 72.2877 7.06238C75.4128 10.4989 76.2147 14.5445 75.273 19.0017C74.4589 22.8456 72.555 26.1834 70.3098 29.3482C66.5967 34.5791 61.9172 38.8552 56.9951 42.8885C55.3297 44.2549 53.5986 45.543 51.8962 46.8683C51.7564 46.9753 51.6042 47.0658 51.4233 47.1852C50.42 45.8599 49.4372 44.5553 48.4544 43.2507C47.6732 42.2135 46.8836 41.1847 46.1229 40.1311C46.0201 39.987 45.9831 39.6578 46.0736 39.5343C47.2661 37.9333 48.4832 36.353 49.7004 34.7685C49.7333 34.7232 49.795 34.7026 49.8731 34.645C50.7859 35.855 51.6947 37.0567 52.6651 38.3408C54.3593 36.8468 56.0288 35.427 57.6448 33.9453C60.8974 30.9698 63.8663 27.739 66.2759 24.035C67.6781 21.8826 68.8254 19.6067 69.2201 17.0221C69.6725 14.0506 68.6321 11.7377 66.1896 10.0297C63.9814 8.48637 61.4649 7.73734 58.8702 7.20643C54.5197 6.31335 50.1116 6.19399 45.6953 6.4327C43.1253 6.57263 40.5635 6.84837 37.9976 7.0418C37.8125 7.05415 37.537 6.97595 37.4342 6.84426C36.0608 5.05398 34.7121 3.24312 33.3633 1.43639C33.3304 1.39523 33.3263 1.32938 33.2893 1.21826Z"
                  fill="url(#paint0_radial_138_53)"
                />
                <path
                  d="M68.4183 48C67.4479 46.7118 66.5062 45.4772 65.5769 44.2301C65.2191 43.7527 64.6147 43.263 64.6106 42.7774C64.6106 42.2958 65.2068 41.7978 65.5687 41.3246C75.6061 28.1177 85.6518 14.9108 95.681 1.69975C95.9688 1.32112 96.2608 1.18531 96.7254 1.18942C98.8801 1.21 101.039 1.19765 103.194 1.19765C103.407 1.19765 103.621 1.19765 104.004 1.19765C92.0953 16.8615 80.2774 32.4061 68.4183 48.0041V48Z"
                  fill="#A6BB8D"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_138_53"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(52.3548 9.16855) rotate(99.9581) scale(55.5789 49.889)"
                >
                  <stop stopColor="#353E55" />
                  <stop offset="0.0001" stopColor="#61876E" />
                  <stop offset="0.208333" stopColor="#EAE7B1" />
                  <stop offset="0.419546" stopColor="#61876E" />
                  <stop offset="0.527979" stopColor="#EAE7B1" />
                  <stop offset="0.645833" stopColor="#61876E" />
                  <stop offset="0.75" stopColor="#EAE7B1" />
                  <stop offset="0.859375" stopColor="#EAE7B1" />
                  <stop offset="1" stopColor="#EAE7B1" />
                </radialGradient>
                <clipPath id="clip0_138_53">
                  <rect
                    width="103.837"
                    height="48"
                    fill="white"
                    transform="translate(0.166992)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
              {links?.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 "
                      aria-current="page"
                    >
                      {" "}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};
export default HeaderCs;
