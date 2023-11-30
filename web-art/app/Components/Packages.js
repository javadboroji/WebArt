import React from "react";

function Packages() {
  const packageItem = [
    {
      packageOne: [
        {
          name: "قابلیت سفارش سازی",
          id: "pk1",
        },
        {
          name: " رابط کاربری تعاملی (ریسپانسیو) ",
          id: "pk2",
        },
        {
          name: " هاست و دامنه به نام مشتری ",
          id: "pk3",
        },
        {
          name: " شروع قیمت از 2000000   ",
          id: "pk4",
        },
        {
          name: "  هاست و دامنه به نام مشتری  ",
          id: "pk5",
        },
        {
          name: "  هاست و دامنه به نام مشتری   ",
          id: "pk6",
        },
      ],
      price:'8000000',
      title:'استاندارد'
    },
    {
      packageTwo: [
        {
          name: "قابلیت سفارش سازی",
          id: "pk1",
        },
        {
          name: " رابط کاربری تعاملی (ریسپانسیو) ",
          id: "pk2",
        },
        {
          name: " هاست و دامنه به نام مشتری ",
          id: "pk3",
        },
        {
          name: " شروع قیمت از 2000000   ",
          id: "pk4",
        },
        {
          name: "  هاست و دامنه به نام مشتری  ",
          id: "pk5",
        },
        {
          name: "  هاست و دامنه به نام مشتری   ",
          id: "pk6",
        },
      ],
      price:'15000000',
      title:'طلایی'
    },
    {
        packageTree: [
          {
            name: "قابلیت سفارش سازی",
            id: "pk1",
          },
          {
            name: " رابط کاربری تعاملی (ریسپانسیو) ",
            id: "pk2",
          },
          {
            name: " هاست و دامنه به نام مشتری ",
            id: "pk3",
          },
          {
            name: " شروع قیمت از 2000000   ",
            id: "pk4",
          },
          {
            name: "  هاست و دامنه به نام مشتری  ",
            id: "pk5",
          },
          {
            name: "  هاست و دامنه به نام مشتری   ",
            id: "pk6",
          },
        ],
        price:'2500000',
        title:'حرفه'
      },
  ];

  return (
    <div className="container px-4 md:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl m-auto mt-14 ">
      <h3 className="text-3xl font-semibold py-8 text-3C6255 text-center lg:text-start">
        {" "}
        بسته های منتخب{" "}
      </h3>
        <div className="flex  flex-wrap lg:flex-nowrap justify-center items-center">
        {packageItem.map((item, index) => (
    <div key={index} className=" w-4/5 md:w-2/3 xl:w-1/3 w flex flex-col mx-4 mb-8 lg:mb-0">
        <div className="package-card">
            <div className="pakages-card-header flex justify-center items-center pt-8">
                <div className="circle flex items-center justify-center z-10">
                    <span className="text-base lg:text-xl text-EEE9DA">
                        {item.title} {/* Displaying the title */}
                    </span>
                </div>
            </div>
            <div className="item relative z-10 mt-8">
                {Object.values(item).map((pkg, pkgIndex) => {
                    if (Array.isArray(pkg)) {
                        return (
                            <div key={pkgIndex}>
                                {pkg.map((packageItem) => (
                                    <p key={packageItem.id} className="py-2 md:py-3 font-medium pr-12 before-pakage-item">
                                        {packageItem.name}
                                    </p>
                                ))}
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="flex justify-between px-12 py-4">
                    <span className="text-sm">شروع قیمت از: <span className="font-semibold text-3C6255 text-sm md:text-xl  ">{item.price}</span> تومان</span>
                </div>
            </div>
        </div>
    </div>
))}

      
        </div>
    </div>
  );
}

export default Packages;
