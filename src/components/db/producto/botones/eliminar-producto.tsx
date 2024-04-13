"use client"

import { useEffect, useState } from "react";
import { useProductos } from "@/context/producto-c";
import { Productos } from "@prisma/client";
import { useEdgeStore } from "@/libs/edgestore";

export default function EliminarProdBtn({ producto }: {
    producto: Productos
}) {
    const { productos, loadProductos, deleteProducto } = useProductos();
    const {edgestore} = useEdgeStore();

    useEffect(() => {
        loadProductos()
    }, []);

    const [status, setStatus] = useState<'pending' | 'uploading' | 'error'>('pending');
    const [toast, setToast] = useState("");
    const [modal, setModal] = useState<boolean>(false);
    const [deleting, setDeleting] = useState<boolean>(false)

    const checkDelete = () => {
        setModal(!modal)
    }
    
    const deleteAction = () => {
        deleteProducto(producto.id);
        setDeleting(true);

        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modal]);

    return(
        <>
            <button className="button alert submit-prod" onClick={checkDelete}>
                {status === "pending" ? "Eliminar producto" : ""}
                {status === "uploading" ? "Cargando" : ""}
                {status === "error" ? "Error" : ""}
            </button>
            {toast !== "" ?
                <div className="toast">
                    <p className="toast-text">{toast}</p>    
                </div> : null
            }
            {modal ? (
                <div className="modal">
                    <div className="modal-bg" />
                    <div className="modal-cont">
                        <div className="modal">
                            <p className="modal-msg">¿Estás seguro de eliminar <span>{producto.nombre}</span>?</p>
                            <div className="modal-btns">
                                <button className="button" onClick={() => setModal(!modal)}>Cancelar</button>
                                <button
                                    className="button alert"
                                    onClick={async() => {
                                        const res = await edgestore.publicFiles.delete({
                                            url: producto.imagen,
                                        });
                                        
                                        deleteAction();

                                        return res
                                    }}>
                                        {deleting ? "Eliminando" : "Eliminar"}
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}