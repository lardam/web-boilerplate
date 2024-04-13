"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ children }: {
    children: React.ReactNode
}){
    return(
        <div className="breadcrumb">
            <Link className="crumb link-crumb" href="/panel">Inicio</Link>
            {children}
        </div>
    )
}