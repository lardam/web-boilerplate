"use client";

import { useEdgeStore } from "@/libs/edgestore";
import { Productos } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import EditarProdBtn from "../botones/editar-producto";
import { ArrowLeftFromLine } from "lucide-react";
import EliminarProdBtn from "../botones/eliminar-producto";

export default function Editar({ producto, setEditable }: { producto: Productos | null, setEditable: (prod: Productos | null) => void }) {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<File>();

  const [nuevoProducto, setNuevoProducto] = useState<Productos>({
    id: "",
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
    categoria: "Hamburguesas",
    local: "Todos los locales",
    activo: false,
    creado: new Date(),
    modificado: new Date(),
  });

  useEffect(() => {
    if (producto) {
      setNuevoProducto(producto);
    }
  }, [producto]);

  return (
    <>
      {producto !== null ? (
        <>
          <form className="editar-form" onSubmit={(e) => e.preventDefault()}>

            <div className="foto-producto-cont">
              <p className="foto">Foto del producto</p>
              <div className="foto-preview">
                {nuevoProducto.imagen === "" ? (
                  <p className="no-foto-msg">No hay foto aún.</p>
                ) : (
                  <Image src={nuevoProducto.imagen} alt="" sizes="80vw" fill />
                )}
              </div>

              {/* Chequear si hay imagen */}            
              {nuevoProducto.imagen === "" ?
                  <input
                  className="db-input file"
                  type="file"
                  onChange={(e) => {
                      setFile(e.target.files?.[0]);
                  }}
                  /> : null
              }

              {/* Si hay imagen, que se pueda borrar */}
              {nuevoProducto.imagen !== "" ? (
                <button
                  className="button"
                  onClick={async () => {
                      const res = await edgestore.publicFiles.delete({
                        url: nuevoProducto.imagen,
                      });

                      setNuevoProducto((prod) => ({
                          ...prod,
                          imagen: ""
                      }))

                      return res;
                  }}
                >
                  Eliminar
                </button>
              ) : null}

              {file !== undefined && nuevoProducto.imagen === "" ? (
                <button
                  className="button"
                  onClick={async () => {
                      if(file){
                          const res = await edgestore.publicFiles.upload({
                            file,
                            onProgressChange: (progress) => {
                              console.log(progress);
                            },
                          });
        
                          setNuevoProducto((prod) => ({
                            ...prod,
                            imagen: res.url
                          }));
                        }}
                      }
                >
                  Subir imagen
                </button>
              ) : null}
            </div>

            <label className="db-label">
              Nombre del producto
              <input
                type="text"
                name="nombre"
                defaultValue={nuevoProducto.nombre}
                className="db-input"
                onChange={(e) =>
                  setNuevoProducto((prod) => ({
                    ...prod,
                    nombre: e.target.value,
                  }))
                }
              />
            </label>
            <label className="db-label">
              Descripción
              <textarea
                name="descripcion"
                defaultValue={nuevoProducto.descripcion}
                className="db-input db-textarea"
                onChange={(e) =>
                  setNuevoProducto((prod) => ({
                    ...prod,
                    descripcion: e.target.value,
                  }))
                }
              />
            </label>
            <label className="db-label">
              Precio
              <input
                type="text"
                name="precio"
                defaultValue={nuevoProducto.precio}
                className="db-input"
                onChange={(e) =>
                  setNuevoProducto((prod) => ({
                    ...prod,
                    precio: e.target.value,
                  }))
                }
              />
            </label>
            <label className="db-label">
              Categoría
              <select
                id="categorias"
                value={nuevoProducto.categoria}
                className="db-selection db-input"
                onChange={(e) =>
                  setNuevoProducto((prod) => ({
                    ...prod,
                    categoria: e.target.value,
                  }))
                }
              >
                <option value="Hamburguesas">Hamburguesas</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Acompañamientos">Acompañamientos</option>
              </select>
            </label>
            <label className="db-label">
              Local
              <select
                id="locales"
                value={nuevoProducto.local}
                className="db-selection db-input"
                onChange={(e) =>
                  setNuevoProducto((prod) => ({ ...prod, local: e.target.value }))
                }
              >
                <option value="Todos los locales">Todos los locales</option>
                <option value="Local 1">Local 1</option>
                <option value="Local 2">Local 2</option>
              </select>
            </label>
            <label className="db-label label-checkbox">
              Activo
              <input
                type="checkbox"
                checked={nuevoProducto.activo}
                name="activo"
                onChange={(e) =>
                  setNuevoProducto((prod) => ({
                    ...prod,
                    activo: e.target.checked,
                  }))
                }
              />
            </label>
            <EditarProdBtn producto={nuevoProducto} />
            <EliminarProdBtn producto={producto} />
          </form>
          <div className="go-back-btn" onClick={() => setEditable(null)}>
            <ArrowLeftFromLine className="go-back-icon" />
          </div>
        </>
      ) : null}
    </>
  );
}
