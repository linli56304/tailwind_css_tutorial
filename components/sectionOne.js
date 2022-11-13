import Image from 'next/image'
import Link from "next/link"
import Author from './_child/author'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper'

export default function sectionOne() {
    SwiperCore.use([Autoplay])
    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    //spaceBetween={50}
                    slidesPerView={1}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    autoplay={{
                        delay:2000
                    }}
                    >
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>
                </Swiper>
                
            </div>
        </section>
    )
}

function slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><Image src={"/images/player2image.png"}width={600}height={600}/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className='cat'>
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- 11/11/2022</Link>
                </div>
                <div className='title'>
                    <Link href={"/"} className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>Player 2</Link>
                </div>
                <p className='text-gray-500 py-3'>
                    Player 2 team 3 is the best senior project team.
                </p>
                <Author></Author>
            </div>
        </div>
    );
}