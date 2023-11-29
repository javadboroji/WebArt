import React from "react";
import { Collapse } from "antd";
function Accordion() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: "1",
      label: <p className="font-medium text-3C6255">طراحی ریسپانسیو چه معنی دارد ؟</p>,
      children: (
        <p className="font-medium">
          طراحی ریسپانسیو به این معنا میباشد که طراحی وبسایت یا نرم افزار تحت وب
          به گونه ای باشد که به طور خودکار و بهترین شکل ممکن با انواع دستگاه ها
          و اندازه های صفحه نمایش سازگاری داشته باشد. با استفاده از تکنیک های
          طراحی ریسپانسیو، محتوا و طرح بندی صفحه به طور اتوماتیک تنظیم میشود تا
          بر روی تلفن همراه، تبلت و رایانه شخصی به درستی نمایش داده شود
        </p>
      ),
    },
    {
      key: "2",
      label: <p className="font-medium text-3C6255">هاست و دامنه چیست؟</p>,
      children: (
        <p className="font-medium">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      ),
    },
    {
      key: "3",
      label: <p className="font-medium text-3C6255">محاسبه هزینه طراحی وب سایت چگونه است؟</p>,
      children:  <p className="font-medium">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
      استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
      ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
      کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
      در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
      الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
      شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
      اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
      قرار گیرد.
    </p>,
    },
    {
        key: "4",
        label: <p className="font-medium text-3C6255"> آیا همه هزینه طراحی باید اول پرداخت کنم؟</p>,
        children:  <p className="font-medium">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
        ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
        در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
        طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
        الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
        شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
        اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
        قرار گیرد.
      </p>,
      },
      {
        key: "5",
        label: <p className="font-medium text-3C6255">چه مقدار در طراحی سایت خود نقش دارم؟</p>,
        children:  <p className="font-medium font-medium">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
        ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
        در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
        طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
        الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
        شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
        اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
        قرار گیرد.
      </p>,
      }
  ];

  return (
    <div className="container px-4 md:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl m-auto mt-10">
      <h3 className="text-3xl font-semibold py-8 text-3C6255">
        {" "}
        سوالات متداول
      </h3>
      <div className="accordion-box">
        <Collapse items={items} defaultActiveKey={["1"]} />
      </div>
    </div>
  );
}

export default Accordion;
