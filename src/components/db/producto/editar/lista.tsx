"use client";

import { Productos } from "@prisma/client";
import { Pencil } from 'lucide-react';

export default function ListaProductos({data, setEditable}: {
    data: Productos[],
    setEditable: (prod: Productos) => void
}) {
  const handleSelection = (prod: Productos) => {
    setEditable(prod)
  }

  return (
    <>
      {data.length > 0 ? (
        <ul className="products-list">
          {data
            .sort((a, b) => {
              const dateA = new Date(a.creado).getTime();
              const dateB = new Date(b.creado).getTime();
              return dateA - dateB;
            })
            .map((prod, index) => (
              <li className="product" key={index}>
                <div className="product-card">
                  <div className="product-info">
                    <h4 className="product-name">{prod.nombre}</h4>
                    <p className="product-price">{prod.precio}</p>
                  </div>
                  <div className="edit-btn" onClick={() => handleSelection(prod)}>
                    <Pencil className="edit-icon" />
                  </div>
                </div>
                <hr className="product-divider" />
              </li>
            ))}
        </ul>
      ) : (
        <div className="no-data-cont">
          <p className="no-data-text">No hay datos aún.</p>
        </div>
      )}
    </>
  );
}
