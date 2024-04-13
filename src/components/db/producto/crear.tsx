"use client"

import { CreateProducto } from '@/interfaces/producto';
import { useEdgeStore } from '@/libs/edgestore';
import Image from 'next/image';
import { useState } from 'react';
import CrearProdBtn from './botones/crear-producto';

export default function CrearProducto(){
    const { edgestore } = useEdgeStore();
    
    const [file, setFile] = useState<File>();

    const [producto, setProducto] = useState<CreateProducto>({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
        categoria: "Hamburguesas",
        local: "Todos los locales",
        activo: false
    });

    return(
        <>
            <form
                className="crear-prod"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="foto-producto-cont">
                    <p className="foto">Foto del producto</p>
                    <div className="foto-preview">
                        {producto.imagen === "" ?
                            <p className="no-foto-msg">No hay foto aún.</p> : 
                            <Image src={producto.imagen} alt='' sizes='80vw' fill />
                        }
                    </div>
                    <input
                        className='db-input file'
                        type="file"
                        onChange={(e) => {
                            setFile(e.target.files?.[0]);
                        }}
                    />
                    {file && producto.imagen === "" ? 
                        <button
                            className='button'
                            onClick={async () => {
                                const res = await edgestore.publicFiles.upload({
                                file,
                                onProgressChange: (progress) => {
                                    console.log(progress);
                                },
                                });
                                
                                setProducto((prod) => ({
                                    ...prod,
                                    imagen: res.url
                                }))
                            }}
                        >
                            Subir imagen
                        </button> : null
                    }
                    {producto.imagen !== "" ? 
                        <button
                            className='button'
                            onClick={async () => {
                                const res = await edgestore.publicFiles.delete({
                                    url: producto.imagen
                                });

                                setProducto((prod) => ({
                                    ...prod,
                                    imagen: ""
                                }))

                                return res
                            }}
                        >
                            Eliminar
                        </button> : null
                    }
                </div>
                <label className="db-label">
                    Nombre del producto
                    <input type="text" name="nombre" className="db-input" onChange={(e) => setProducto((prod) => ({...prod, nombre: e.target.value}))} />
                </label>
                <label className="db-label">
                    Descripción
                    <textarea name="descripcion" className="db-input db-textarea" onChange={(e) => setProducto((prod) => ({...prod, descripcion: e.target.value}))}/>
                </label>
                <label className="db-label">
                    Precio
                    <input type="text" name="precio" className="db-input" onChange={(e) => setProducto((prod) => ({...prod, precio: e.target.value}))}/>
                </label>
                <label className="db-label">
                    Categoría
                    <select id="categorias" className="db-selection db-input" onChange={(e) => setProducto((prod) => ({...prod, categoria: e.target.value}))}>
                        <option value="Hamburguesas">Hamburguesas</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Acompañamientos">Acompañamientos</option>
                    </select>
                </label>
                <label className="db-label">
                    Local
                    <select id="locales" className="db-selection db-input" onChange={(e) => setProducto((prod) => ({...prod, local: e.target.value}))}>
                        <option value="Todos los locales">Todos los locales</option>
                        <option value="Local 1">Local 1</option>
                        <option value="Local 2">Local 2</option>
                    </select>
                </label>
                <label className="db-label label-checkbox">
                    Activo
                    <input type="checkbox" name="activo" onChange={(e) => setProducto((prod) => ({...prod, activo: e.target.checked}))}/>
                </label>
                <CrearProdBtn producto={producto} />
            </form>
        </>
    )
}