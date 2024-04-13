"use client"

import { Productos } from "@prisma/client";
import { useState } from "react";
import ListaProductos from "./editar/lista";
import Editar from "./editar/editar";

export default function EditarProducto({ data }: {
    data: Productos[]
}){
    const [editable, setEditable] = useState<Productos | null>(null);

    return(
        <div className="editar-prod">
            {editable === null ? <ListaProductos data={data} setEditable={setEditable} /> : <Editar producto={editable} setEditable={setEditable} />}
        </div>
    )
}