import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function sectionThree() {
    return (
        <section className='container mx-auto md:px-20 py-16'>
            <h1 className="font-bond text-4xl py-12 text-center">Most Popular</h1>
            <div className='grid lg:grid-cols-2'>
                <div className='item'>
                    <h1 className='font-bold text-4xl py-12'>business</h1>
                    <div className='flex flex-col gap-6'>
                        {post()}
                        {post()}
                        {post()}
                        {post()}
                        {post()}
                    </div>
                </div>
                <div className='item'>
                    <h1 className='font-bold text-4xl py-12'>travel</h1>
                    <div className='flex flex-col gap-6'>
                        {post()}
                        {post()}
                        {post()}
                        {post()}
                        {post()}
                    </div>
                </div>
            </div>
        </section>
    )
}

function post() {
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}><Image src={"/images/player2image.png"} classname='rounded' width={300} height={250}/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className='cat'>
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Announcement</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- 11/11/2022</Link>
                </div>   
                <div className='title'>
                    <Link href={"/"} className='text-xl font-bold text-gray-800 hover:text-gray-600'>Player 2</Link>
                </div>
                <Author></Author>
            </div>  
        </div>
    )
}