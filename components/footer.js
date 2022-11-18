import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function footer() {
    return(
        <footer className="bg-gray-50">
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Link href={"/"} legacyBehavior><ImFacebook2 color="#888888"/></Link>
                        <Link href={"/"} legacyBehavior><ImTwitter color="#888888"/></Link>
                        <Link href={"/"} legacyBehavior><ImYoutube color="#888888"/></Link>
                    </div>
                    <p className="py-5 text-gray-400">copyright reserved</p>
                    <p className="text-gray-400 text-center">terms & condition</p>
                </div>
                
            </div>
        </footer>
    )
}