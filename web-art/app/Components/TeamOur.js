import React from "react";
import userImage from "@/public/asset/image/user-icon.png";
import userMan  from "@/public/asset/image/card-man.png"
import email from "@/public/asset/image/email.svg";
import git from "@/public/asset/image/git.svg";
import link from "@/public/asset/image/linkDin.svg";
import Image from "next/image";
import Link from "next/link";
function TeamOur() {
  return (
    <div className="team-bg py-10 my-10">
      <div className="container px-4 md:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl m-auto">
        <h3 className="text-3xl font-semibold py-8 text-slate-100 text-center lg:text-start"> تیم ما</h3>
        <div className="flex  flex-wrap cards-box relative z-10 justify-center lg:justify-start">
          <div className="team-card lg:w-52 sm:w-1/3 w-10/12 lg:h-52 mx-2 mb-8  relative  rounded-lg xl:mx-8 lg:mx-4">
            <Image src={userMan} Width={"100%"} alt="userMan" />
            <div className="user-info flex flex-col items-center absolute ">
              <span className="name font-semibold text-base text-3C6255">
                {" "}
                کیوان علیشیری
              </span>
              <span className="job font-medium text-base text-3C6255 mt-2">
                {" "}
                برنامه نویس بک اند
              </span>
              <div className="flex mt-5">
                <div className="w-8 h-8 rounded-full bg-social mx-1 relative ">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={git} alt="git" />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={link} alt="linkdin" />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={email} alt="email" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card lg:w-52 lg:h-52 sm:w-1/3 w-10/12 mx-2 mb-8 sm:mb-0  relative  rounded-lg xl:mx-8  lg:mx-4 mt-auto">
            <Image src={userMan} Width={"100%"} alt="userMan" />
            <div className="user-info flex flex-col items-center absolute ">
              <span className="name font-semibold text-base text-3C6255">
                {" "}
               جواد بروجی
              </span>
              <span className="job font-medium text-base text-3C6255 mt-2">
                {" "}
                برنامه نویس  Front
              </span>
              <div className="flex mt-5">
                <div className="w-8 h-8 rounded-full bg-social mx-1 relative ">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={git} alt="git"/>
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={link} alt="link" />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={email} alt="email" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card lg:w-52 lg:h-52 sm:w-1/3 w-10/12 mx-2 lg:mx-0 relative  rounded-lg xl:mx-8 lg:mx-4">
            <Image src={userMan} Width={"100%"} alt="userMan" />
            <div className="user-info flex flex-col items-center absolute ">
              <span className="name font-semibold text-base text-3C6255">
                {" "}
              امید شریفی
              </span>
              <span className="job font-medium text-base text-3C6255 mt-2">
                {" "}
                برنامه نویس  Front
              </span>
              <div className="flex mt-5">
                <div className="w-8 h-8 rounded-full bg-social mx-1 relative ">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={git} alt="git" />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={link} alt="link" />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={email} alt="email" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card lg:w-52 lg:h-52 sm:w-1/3 w-10/12 mx-2 mt-8 relative  rounded-lg xl:mx-8 lg:mt-auto lg:mx-4">
            <Image src={userImage} Width={"100%"} alt="userImage" />
            <div className="user-info flex flex-col items-center absolute ">
              <span className="name font-semibold text-base text-3C6255">
                {" "}
              زهرا امینی
              </span>
              <span className="job font-medium text-base text-3C6255 mt-2">
                {" "}
                طراح ui/ux
              </span>
              <div className="flex mt-5">
                <div className="w-8 h-8 rounded-full bg-social mx-1 relative ">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={git}  alt="git"/>
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={link} alt="link" />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-social mx-1  relative">
                  <Link
                    href={"/"}
                    className="absolute top-1/2 left-1/2 transfor-cs"
                  >
                    <Image src={email} alt="email" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamOur;
