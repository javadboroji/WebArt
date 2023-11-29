import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import social from '@/public/asset/image/Social-Icons.svg'
import social1 from '@/public/asset/image/Social-insta.svg'
import social2 from '@/public/asset/image/Social-watsapp.svg'
import social3 from '@/public/asset/image/Social-tel.svg'

import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea'
function Contact() {
    const textColor={
        color:'#3C6255'
    }
  return (
    <div className='container px-4 lg:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mt-14'>
        <h3 className='text-2xl md:text-4xl mb-8 text-center md:text-right' style={textColor}> ارتباط باما</h3>
        <div className=' flex flex-wrap flex-col md:flex-row  relative'>       
                <div className='contact-cart flex order-2 mt-8 md:mt-0'>
                    <div className='w-full md:w-1/2 xl:w-3/4'>
                    <span>
                    اگر شما هم  نیازمند طراحی وبسایت و یا نرم افزار منحصر به فرد برای کسب و کارتان هستید ، ما مشتاق همکاری با شما هستیم.
                    </span>
                    <p className='mt-6'>   شماره تماس : <span> 09123456789</span></p>
                    <div className=' relative z-1 mt-10  contact-border'>
                        <div className='pt-4 flex justify-between'>
                        <span> راه های ارتباطی </span>
                        <div className='flex  '>
                            <div className='bg-social rounded-full w-8 h-8 relative z-10 mx-2 relative'>
                                <Link href="/" className='absolute   trans-top-left'>
                                    <Image src={social}/>
                                </Link>
                            </div>
                            <div className='bg-social rounded-full w-8 h-8 relative z-10 mx-2 relative'>
                            <Link href="/"  className='absolute trans-top-left'>
                                    <Image src={social1}/>
                                </Link>
                            </div>
                            <div className='bg-social rounded-full w-8 h-8 relative z-10 mx-2 relative'>
                            <Link href="/"  className='absolute trans-top-left'>
                                    <Image src={social2}/>
                                </Link>
                            </div>
                            <div className='bg-social rounded-full w-8 h-8 relative z-10 mx-2 relative'>
                            <Link href="/"  className='absolute trans-top-left'>
                                    <Image src={social3}/>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>
                  
                </div>
                <div className=' md:absolute order-1 z-10 right-1/2 top-10'>
                    <div className='w-full contact-form'>
                    <Input placeholder="نام خانوادگی"  className='mb-5'/>
                    <Input placeholder=" شماره تماس"  className='mb-5'/>
                    <TextArea rows={4}  className='mb-5'/>
                    <button className='contact-btn'> ارسال</button>
                    </div>
                  </div>
        </div>
    </div>
  )
}

export default Contact