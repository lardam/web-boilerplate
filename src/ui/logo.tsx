import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <Link className="logo" href="/">
            {/* Imagen
            
            <div className="logo-cont">
                <Image src={} alt="" fill sizes="5vw" />
            </div> */}

            <h1 className="logo-text">Restaurant</h1>
        </Link>
    )
}