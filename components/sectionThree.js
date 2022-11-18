import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function sectionThree() {
    return (
        <section className='container mx-auto md:px-20 py-16'>
            <h1 className="font-bond text-4xl py-12 text-center">Most Popular</h1>
            <Swiper
                    //spaceBetween={50}
                    slidesPerView={2}
            >
                <SwiperSlide>{post()}</SwiperSlide>
                <SwiperSlide>{post()}</SwiperSlide>
                <SwiperSlide>{post()}</SwiperSlide>
                <SwiperSlide>{post()}</SwiperSlide>
                <SwiperSlide>{post()}</SwiperSlide>
            </Swiper>
        </section>
    )
}

function post() {
    return(
        <div className="grid">
            <div className="images">
                <Link href={"/"}><Image src={"/images/player2image.png"} width={600} height={400}/></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <Link href={"/"} className="text-orange-600 hover:text-orange-800">Announcement</Link>
                <Link href={"/"} className="text-gray-800 hover:text-gray-600">- 11/11/2022</Link>
            </div>
            <div className='title'>
                <Link href={"/"} className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>Player 2</Link>
            </div>
            <p className='text-gray-500 py-3'>
                    Player 2 team 3 is the best senior project team.
                </p>
                <Author></Author>
        </div>
    )
}