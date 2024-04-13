"use client"

import { useEffect, useState } from "react";
import { CreateProducto } from "@/interfaces/producto";
import { useProductos } from "@/context/producto-c";

export default function CrearProdBtn({ producto }: {
    producto: CreateProducto
}) {
    const { productos, loadProductos, createProducto } = useProductos();

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
            createProducto(producto);
        }
    }

    useEffect(() => {
        const check = productos.find((prod) => prod.imagen === producto.imagen);

        if(check !== undefined) {
            setUploaded(true)
            setToast("Producto creado")

            setTimeout(() => {
                window.location.reload();
            }, 1000)
        }
    }, [productos, status])

    return(
        <>
            <button className="button submit-prod" onClick={handleLoader} disabled={uploaded ? true : false}>
                {status === "pending" ? "Crear producto" : ""}
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