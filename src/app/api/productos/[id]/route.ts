import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  console.log(params.id);
  try {
    const producto = await prisma.productos.findFirst({
      where: {
        id: String(params.id),
      },
    });

    if (!producto)
      return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });

    return NextResponse.json(producto);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const productoEliminado = await prisma.productos.delete({
      where: {
        id: String(params.id),
      },
    });
    if (!productoEliminado)
      return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });

    return NextResponse.json(productoEliminado);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { nombre, descripcion, precio, imagen, categoria, local, activo } = await request.json();

    const productoEditado = await prisma.productos.update({
      where: {
        id: String(params.id),
      },
      data: { nombre, descripcion, precio, imagen, categoria, local, activo },
    });

    return NextResponse.json(productoEditado);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}