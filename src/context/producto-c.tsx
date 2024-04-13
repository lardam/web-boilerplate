"use client";

import { createContext, useState, useContext } from "react";
import { CreateProducto, UpdateProducto } from "@/interfaces/producto";
import { Productos } from "@prisma/client";

export const ProductoContext = createContext<{
  productos: Productos[];
  loadProductos: () => Promise<void>;
  createProducto: (note: CreateProducto) => Promise<void>;
  deleteProducto: (id: string) => Promise<void>;
  selectedProducto: Productos | null;
  setSelectedProducto: (note: Productos | null) => void;
  updateProducto: (id: string, note: UpdateProducto) => Promise<void>;
}>({
  productos: [],
  loadProductos: async () => {},
  createProducto: async (note: CreateProducto) => {},
  deleteProducto: async (id: string) => {},
  selectedProducto: null,
  setSelectedProducto: (note: Productos | null) => {},
  updateProducto: async (id: string, note: UpdateProducto) => {},
});

export const useProductos = () => {
  const context = useContext(ProductoContext);
  if (!context) {
    throw new Error("useProductos must be used within a ProductosProvider");
  }
  return context;
};

export const ProductosProvider = ({ children }: { children: React.ReactNode }) => {
  const [productos, setProductos] = useState<Productos[]>([]);
  const [selectedProducto, setSelectedProducto] = useState<Productos | null>(null);

  async function loadProductos() {
    const res = await fetch("/api/productos");
    const data = await res.json();
    setProductos(data);
  }

  async function createProducto(note: CreateProducto) {
    const res = await fetch("/api/productos", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newProducto = await res.json();
    setProductos([...productos, newProducto]);
  }

  async function deleteProducto(id: string) {
    const res = await fetch("/api/productos/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    setProductos(productos.filter((note) => note.id !== id));
  }

  async function updateProducto(id: string, note: UpdateProducto) {
    const res = await fetch("/api/productos/" + id, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setProductos(productos.map((note) => (note.id === id ? data : note)));
  }

  return (
    <ProductoContext.Provider
      value={{
        productos,
        loadProductos,
        createProducto,
        deleteProducto,
        selectedProducto,
        setSelectedProducto,
        updateProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};