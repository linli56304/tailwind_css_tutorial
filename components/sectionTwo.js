import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function sectionTwo() {
    return(
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bond text-4xl py-12 text-center">Lastest Post</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {post()}
                {post()}
                {post()}
                {post()}
                {post()}
            </div>
        </section>
    )
}

function post() {
    return(
        <div className="item">
            <div className="images">
                <Link href={"/"}><Image src={"/images/player2image.png"} className="rounded" width={500} height={350}/></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <Link href={"/"} className="text-orange-600 hover:text-orange-800">Announcement</Link>
                <Link href={"/"} className="text-gray-800 hover:text-gray-600">- 11/11/2022</Link>
            </div>
            <div className='title'>
                <Link href={"/"} className='text-xl font-bold text-gray-800 hover:text-gray-600'>Player 2</Link>
            </div>
            <p className='text-gray-500 py-3'>
                    Player 2 team 3 is the best senior project team.
                </p>
                <Author></Author>
        </div>
    )
}