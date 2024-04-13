"use client"
import { useProductos } from "@/context/producto-c";
import { useEffect, useState } from "react";
import CrearProducto from "./producto/crear";
import EditarProducto from "./producto/editar";

export default function ProductsPage(){
    const { productos, loadProductos } = useProductos();

    useEffect(() => {
        loadProductos();
    }, []);

    const [active, setActive] = useState<string>("Crear");

    const handleSelection = (str: string) => {
        setActive(str)
    };

    return(
        <>
        <h3 className="db-title">{active} productos</h3>
            <div className="db-actions-cont">
                <div className="db-actions-panel">
                    <ul className="db-actions-list">
                        <li className={`db-action${active === "Crear" ? " active-db-action" : ""}`} onClick={() => handleSelection("Crear")}>Crear producto</li>
                        <li className={`db-action${active === "Editar" ? " active-db-action" : ""}`} onClick={() => handleSelection("Editar")}>Editar producto</li>
                    </ul>
                </div>
                <div className="db-actions">
                    {active === "Crear" ? <CrearProducto /> : null}
                    {active === "Editar" ? <EditarProducto data={productos} /> : null}
                </div>
            </div>
        </>
    )
}