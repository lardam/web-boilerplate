"use client"

import { useEffect, useState } from "react";
import { useProductos } from "@/context/producto-c";
import { Productos } from "@prisma/client";

export default function EditarProdBtn({ producto }: {
    producto: Productos
}) {
    const { productos, loadProductos, updateProducto } = useProductos();

    useEffect(() => {
        loadProductos()
    }, []);

    const [status, setStatus] = useState<'pending' | 'uploading' | 'error'>('pending');
    const [uploaded, setUploaded] = useState<boolean>(false);
    const [toast, setToast] = useState("");

    const handleLoader = () => {
        if(producto.imagen === "" || producto.nombre === "" || producto.precio === "" || producto.descripcion === ""){
            setStatus('pending');
            setToast('Completa todos los campos')

            setTimeout(() => {
                setToast("")
            }, 5000)
        } else {
            setStatus('uploading')
            updateProducto(producto.id, producto);

            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
    }

    return(
        <>
            <button className="button submit-prod" onClick={handleLoader} disabled={uploaded ? true : false}>
                {status === "pending" ? "Guardar cambios" : ""}
                {status === "uploading" ? "Cargando" : ""}
                {status === "error" ? "Error" : ""}
            </button>
            {toast !== "" ?
                <div className="toast">
                    <p className="toast-text">{toast}</p>    
                </div> : null
            }
        </>
    )
}