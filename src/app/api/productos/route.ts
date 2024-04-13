import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const data = await prisma.productos.findMany();
    return NextResponse.json(data);
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

export async function POST(request: Request) {
  try {
    const { nombre, descripcion, precio, imagen, categoria, local, activo } = await request.json();

    const nuevo = await prisma.productos.create({
      data: {nombre, descripcion, precio, imagen, categoria, local, activo},
    });

    return NextResponse.json(nuevo);
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