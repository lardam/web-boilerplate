import { Productos } from "@prisma/client";

export type CreateProducto = Omit<Productos, "id" | "creado" | "modificado">;

export type UpdateProducto = Partial<CreateProducto>;