import Logo from "@/ui/logo";
import Image from "next/image";

export default function Principal(){
    return(
        <>
            <div className="claim-1">
                <div className="claim-text-cont">
                    <h1 className="claim">Aquí va el claim de tu marca</h1>
                    <p className="claim-subtext">Aquí el subtexto del claim de la marca</p>
                </div>
                <div className="claim-img-cont">
                    <Image
                        src="/claim-foto.jpg"
                        alt="Imagen principal de la marca"
                        fill
                        sizes="80vw"
                    />
                </div>
                <button className="button primary-btn" type="button">
                    ver menú
                </button>
                <button className="button primary-btn" type="button">
                    pedir online
                </button>
            </div>
        </>
    )
}