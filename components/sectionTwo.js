export default function sectionTwo() {
    return(
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bond text-4xl py-12 text-center">Lastest Post</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

            </div>
        </section>
    )
}

function post() {
    return(
        <div className="item">
            <div className="images">
                <Link href={"/"}><Image src={"/images/player2image.png"} width={500} height={350}/></Link>
            </div>
            <div className="info flex justify-center flex-col py-4"></div>
        </div>
    )
}